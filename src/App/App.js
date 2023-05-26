import React, { useEffect, useState } from "react";
import "./App.css";
import CardTemplate from "../components/Card/CardTemplate";
import LoadingSpinner from "../components/Spinner";
import SetSelector from "../components/SetSelector";
import ColourSelector from "../components/ColourSelector";
import Testing from "../components/Testing";
// import Icon from "../components/Icon";
import { WUBRG } from "../data/Data";

function App() {
  const [setName, setSetName] = useState("neo");
  const [cardContext, setCardContext] = useState();
  const [colourState, setColourState] = useState({
    colours: WUBRG,
    filters: new Set(),
  });
  
  // const mainObj = colourState.filters;
  const mainArr = Array.from(colourState.filters);
  const blah = mainArr.toString().replaceAll(",", "")
  console.log(mainArr.toString().replaceAll(",", ""));

  // function tempfunc(item) {
  //   const va = item.map((i) => {
  //     return `c%3A${i}`;
  //   });
  //   return va.toString().replaceAll(",", "+");
  // }
  // const blah = tempfunc(mainArr)
  // console.log(blah);
  
  // ?q=id<%3Drg+-c%3Ac
  const xyz = '+-c%3Ac'

// {mainArr.includes('x') ? '+-c%3Ac' : null}

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.scryfall.com/cards/random?q=id<%3D${blah}${xyz}+set%3A${setName}`
      );
      const res2 = await fetch(`https://api.scryfall.com/sets`);
      const fetchedData = await res.json();
      const fetchedData2 = await res2.json();
      setCardContext(fetchedData);
      console.log(fetchedData2);
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
      <Testing />

      {/* <Icon /> */}

      <ColourSelector
        colourState={colourState}
        setColourState={setColourState}
      />

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
        <LoadingSpinner />
      )}
    </div>
  );
}

export default App;
