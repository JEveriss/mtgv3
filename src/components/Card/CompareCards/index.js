import React, { useState } from "react";
import { CompareCardModal } from "./CompareCardModal.style";
// import CardImage from "./CardImage";

function CompareCards({ cardData }) {
  const [compareCards, setCompareCards] = useState([]);

  function addCard() {
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
  console.log(compareCards);
  return (
    <CompareCardModal>
      <button className="mainButton" onClick={addCard}>
        Save Card
      </button>
      <div className="mdoalmodal" onClick={(e) => e.stopPropagation()}>
        {compareCards.map((item) => {
          return (
            <div className="compareCardWrapper">
              <h2>{item.name}</h2>
              <div className="cardImage">
                <img alt={item?.name} src={item?.image} />
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
      </div>
    </CompareCardModal>
  );
}

export default CompareCards;
