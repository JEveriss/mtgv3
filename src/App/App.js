import React, { useEffect, useState } from "react";
import "./App.css";
import CardTemplate from "../components/Card/CardTemplate";
// import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";
import ColourSelector from "../components/ColourSelector";
import Testing from "../components/Testing"

function App() {
  const [setName, setSetName] = useState("neo");
  const [cardContext, setCardContext] = useState();

  let g = "g";
  let b = "b";
  let w = "w";
  const TEMPcardColour = `c%3A${g}+c%3A${b}+c%3A${w}`;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.scryfall.com/cards/random?q=${TEMPcardColour}+set%3A${setName}`
      );
      const fetchedData = await res.json();
      setCardContext(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Testing/>
      <ColourSelector/>
        
       <SetSelector setName={setName} setSetName={setSetName} />
      
       {cardContext ? (
        cardContext.card_faces ? (
          cardContext?.card_faces.map((cardFace) => {
            return <CardTemplate fetchData={fetchData} cardData={cardFace} />;
          })
        ) : (
          <CardTemplate fetchData={fetchData} cardData={cardContext} />
        )
      ) : (
<h1> `Not Working :o` </h1>
      )}
      
      {/*
      {cardContext ? (
        cardContext.card_faces ? (
          cardContext?.card_faces.map((cardFace) => {
            return <CardTemplate fetchData={fetchData} cardData={cardFace} />;
          })
        ) : (
          <CardTemplate fetchData={fetchData} cardData={cardContext} />
        )
      ) : (
        <LoadingSpinner />
      )} */}
    </div>
  );
}

export default App;
