import React from "react";
import Button from "../../Button";
import { CompareCardModal, CompareCardOverlay } from "./CompareCardModal.style";

function CompareCards({ compareCards, onClose, show, toggle }) {
  function newManaCost(item) {
    return item.replaceAll("{", "").replaceAll("}", "");
  }

  return (
    <CompareCardModal onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modalContainer ${show ? "show" : null} `}
      >
        <Button onClick={() => toggle()} text={"Close"} />
        <CompareCardOverlay>
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
                  {item?.toughness ? (
                    <li>TOUGHNESS: {item?.toughness}</li>
                  ) : null}
                </ul>
              </div>
            );
          })}
        </CompareCardOverlay>
      </div>
    </CompareCardModal>
  );
}

export default CompareCards;
