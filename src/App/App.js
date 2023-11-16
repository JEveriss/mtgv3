import React, { useEffect, useState } from "react";
import "./App.css";
import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";
import ColourSelector from "../components/ColourSelector";
import { WUBRG } from "../data/Data";
import logo from "../assets/MTGLogo1.png";
import NewCard from "../components/Card/NewCard";
import NewCardTEMP from "../components/Card/CompareCardList";
import "../components/Card/tempstyle.css";

function App() {
  const [setName, setSetName] = useState(" ");
  const [cardContext, setCardContext] = useState();
  const [colourState, setColourState] = useState({
    colours: WUBRG,
    filters: new Set(),
  });
  const [fadeIn, setFadeIn] = useState(0);

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

  // console.log(window);

  return (
    <div className="app">
      <img src={logo} alt="logo" width="400" />
      <SetSelector
        setName={setName}
        setSetName={setSetName}
        cardContext={cardContext}
      />
      <ColourSelector
        colourState={colourState}
        setColourState={setColourState}
      />
      <button
        className="mainButton image"
        onClick={() => {
          fetchData();
          setFadeIn(1);
        }}
        onAnimationEnd={() => setFadeIn(0)}
        fadeIn={fadeIn}
      >
        New Card
      </button>

      {cardContext ? <NewCard cardData={cardContext} /> : <LoadingSpinner />}
      <NewCardTEMP cardData={cardContext} />
    </div>
  );
}

export default App;
