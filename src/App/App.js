import React, { useEffect, useState } from "react";
import "./App.css";
import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";
import ColourSelector from "../components/ColourSelector";
import { WUBRG } from "../data/Data";
import logo from "../assets/MTGLogo1.png";
import NewCard from "../components/Card/NewCard";
import "../components/Card/tempstyle.css";
import Button from "../components/Button";
import { CompareCards } from "../components/TempModalFolder/CompareCards";

function App() {
  const [setName, setSetName] = useState("");
  const [cardContext, setCardContext] = useState();
  const [colourState, setColourState] = useState({
    colours: WUBRG,
    filters: new Set(),
  });
  // const [fadeIn, setFadeIn] = useState(0);

  const mainArr = Array.from(colourState.filters);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.scryfall.com/cards/random?q=c%3A${mainArr}+e%3A${setName}`
      );
      const fetchedData = await res.json();
      setCardContext(fetchedData);
      console.log("response: ", res.url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [openModal, setOpenModal] = useState(false);
  // const Toggle = () => setOpenModal(!openModal);

  const [compareCards, setCompareCards] = useState([]);
  function addCard() {
    const newCard = {
      name: cardContext.name,
      artist: cardContext.artist,
      mana_cost: cardContext.mana_cost,
      type_line: cardContext.type_line,
      eur: cardContext.prices.eur,
      power: cardContext.power,
      toughness: cardContext.toughness,
      rarity: cardContext.rarity,
      image: cardContext.image_uris.normal,
    };
    setCompareCards([...compareCards, newCard]);
  }

  function handleRemove(x) {
    return (x.length = 0);
  }
  console.log(cardContext?.layout === "transform");
  return (
    <div className="appWrap">
      <div className="app">
        <h1>
          <img src={logo} alt="Magic the Gathering Logo" width="400" />
        </h1>
        <SetSelector
          setName={setName}
          setSetName={setSetName}
          cardContext={cardContext}
        />
        <ColourSelector
          colourState={colourState}
          setColourState={setColourState}
        />

        <div className="buttonWrapper">
          {/* BUTTON WITH FADE IN TEMP DISABLED */}
          {/* <button
            className="mainButton image"
            onClick={() => {
              fetchData();
              setFadeIn(1);
            }}
            onAnimationEnd={() => setFadeIn(0)}
            fadeIn={fadeIn}
          >
            New Card
          </button> */}
          <Button
            className="image"
            onClick={() => {
              fetchData();
            }}
            text={"New Card"}
          />
          <Button
            onClick={addCard}
            text={"Save Card"}
            disabled={cardContext?.layout === "transform"}

          />

          <Button
            onClick={() => handleRemove(compareCards)}
            text={"Clear Cards"}
          />
          <CompareCards
            modalButtonText={"View Saved Cards"}
            compareCards={compareCards}
            setCompareCards={setCompareCards}
          />
        </div>
        {cardContext ? <NewCard cardData={cardContext} /> : <LoadingSpinner />}
      </div>
    </div>
  );
}

export default App;
