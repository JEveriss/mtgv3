import React, { useState } from "react";
import { CompareCard } from "./CompareCards.style";
// import CardImage from "./CardImage";

function NewCardTEMP({ cardData }) {
  //   const [activeImage, setActiveImage] = useState(null);
  //   console.log("FROM THE TEMP ", activeImage, setActiveImage);

  const [compareCards, setCompareCards] = useState([]);

  function addCard(e) {
    console.log(e);
    const newCard = {
      name: cardData.name,
      artist: cardData.artist,
      mana_cost: cardData.mana_cost,
      type_line: cardData.type_line,
      eur: cardData.prices.eur,
      power: cardData.power,
      toughness: cardData.toughness,
      rarity: cardData.rarity,
      image: cardData.image_uris.normal,
    };
    setCompareCards([...compareCards, newCard]);
  }

  function newManaCost(item) {
    return item.replaceAll("{", "").replaceAll("}", "");
  }

  return (
    <CompareCard>
      <button onClick={addCard}>ADD CARD</button>

      {compareCards.map((item) => {
        console.log(newManaCost(item.mana_cost));
        return (
          <div className="compareCardWrapper">
            <h2>{item.name}</h2>
            <div className="cardImage">
              <img alt="temp text" src={item?.image} />
            </div>
            <ul>
              <li>MANA VALUE: {newManaCost(item?.mana_cost)}</li>
              <li>TYPE: {item?.type_line}</li>
              <li>RARITY: {item?.rarity}</li>
              {item?.eur ? <li>EUR: {`€${item?.eur}`}</li> : null}
              {item?.power ? <li>POWER: {item?.power}</li> : null}
              {item?.toughness ? <li>TOUGHNESS: {item?.toughness}</li> : null}
            </ul>
          </div>
        );
      })}
    </CompareCard>
  );
}

export default NewCardTEMP;
