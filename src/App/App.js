import React, { useEffect, useState } from "react";
import "./App.css";
import CardTemplate from "../components/Card/CardTemplate";
import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";
import ColourSelector from "../components/ColourSelector";
import { WUBRG } from "../data/Data";

function App() {
  const [setName, setSetName] = useState("neo");
  const [cardContext, setCardContext] = useState();
  const [colourState, setColourState] = useState({
    colours: WUBRG,
    filters: new Set(),
  });
  
  const mainArr = Array.from(colourState.filters);
  const colourUrl = mainArr.toString().replaceAll(",", "");
 console.log(mainArr)
  // ?q=id<%3Drg+-c%3Ac
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
        cardContext.layout !== 'normal' ? (
          cardContext?.card_faces.map((cardFace) => {
            return <CardTemplate fetchData={fetchData} cardData={cardFace} />;
          })
        ) : (
          <CardTemplate fetchData={fetchData} cardData={cardContext} colourUrl={mainArr} />
        )
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default App;
