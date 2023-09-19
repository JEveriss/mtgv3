import React, { useEffect, useState } from "react";
import "./App.css";
import CardTemplate from "../components/Card/CardTemplate";
import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";
import ColourSelector from "../components/ColourSelector";
import { WUBRG } from "../data/Data";
import logo from "../assets/MTGLogo 1.png";

function App() {
  const [setName, setSetName] = useState("neo");
  const [cardContext, setCardContext] = useState();
  const [colourState, setColourState] = useState({
    colours: WUBRG,
    filters: new Set(),
  });

  const mainArr = Array.from(colourState.filters);
  const colourUrl = mainArr.toString().replaceAll(",", "");

  const connectorString = `c%3A${colourUrl}`;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.scryfall.com/cards/random?q=${connectorString}+set%3A${setName}`
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
    <div className='app'>
      <img src={logo} alt='logo'  width="400"/>
      <ColourSelector
        colourState={colourState}
        setColourState={setColourState}
      />

      <SetSelector
        setName={setName}
        setSetName={setSetName}
        cardContext={cardContext}
      />
      {/* layout possibilities: 
      transform
      normal
 */}
      {cardContext ? (
        <CardTemplate
          fetchData={fetchData}
          cardData={cardContext}
          colourUrl={mainArr}
        />
      ) : (
        <LoadingSpinner />
      )}
      {/* {cardContext ? (
        cardContext.layout === 'transform' ? (
          cardContext?.card_faces.map((cardFace) => {
            return <CardTemplate fetchData={fetchData} cardData={cardFace} />;
          })
        ) : (
        )
      ) : (
      )} */}
    </div>
  );
}

export default App;
