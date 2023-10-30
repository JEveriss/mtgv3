import React, { useState } from "react";
// import CardImage from "./CardImage";

function NewCardTEMP({ cardData }) {
  //   const [activeImage, setActiveImage] = useState(null);
  //   console.log("FROM THE TEMP ", activeImage, setActiveImage);

  const [compareCards, setCompareCards] = useState([]);

  function addCard(e) {
    console.log(e);
    const newCard = {
      name: cardData.name,
      mana_cost: cardData.mana_cost,
      type_line: cardData.type_line,
      // usd: cardData.prices.usd,
      //   eur: cardData.prices.eur,
      power: cardData.power,
      toughness: cardData.toughness,
      rarity: cardData.rarity,
      image: cardData.image_uris.normal
    };
    setCompareCards([...compareCards, newCard]);
  }
  console.log("compareCards", compareCards);

  return (
    <div>
      <button onClick={addCard}>ADD CARD</button>
      {compareCards.map((item) => {
        console.log(item)
        return (
          <>
            <h2>{item.name}</h2>
            <div className="cardTitle">
              <h2>art by {item.artist}</h2>
            </div>
            <div className="cardImage">
              {/* <CardImage card={item} /> */}
              <img alt="temp text" src={item?.image} />
            </div>
            <ul>
              <li>MANA VALUE: {item?.mana_cost}</li>
              <li>TYPE: {item?.type_line}</li>
              {/* <li>USD: ${item?.prices.usd}</li> */}
              {/* <li>EUR: €{item?.prices.eur}</li> */}
              <li>POWER: {item?.power}</li>
              <li>TOUGHNESS: {item?.toughness}</li>
              <li>RARITY: {item?.rarity}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default NewCardTEMP;
