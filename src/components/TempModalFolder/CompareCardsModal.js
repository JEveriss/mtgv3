import React from "react";
import Modal from "./Modal";

const CompareCardsModal = ({
  openCompareCardsModal,
  setOpenCompareCardsModal,
  compareCards,
}) => {
  console.log("compareCards: ", compareCards);
  return (
    <div onClick={() => setOpenCompareCardsModal(false)}>
      <Modal open={openCompareCardsModal}>
        <div>
          <button
            className="mainButton"
            onClick={() => setOpenCompareCardsModal(false)}
          >
            xxx
          </button>
        </div>

        <div>
          {compareCards?.map((item) => {
            return (
              <div className="compareCardWrapper">
                <h2>{item.name}</h2>
                <div className="cardImage">
                  <img alt={item?.name} src={item?.image} />
                </div>
                <ul>
                  {/* <li>MANA VALUE: {newManaCost(item?.mana_cost)}</li> */}
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
        </div>
      </Modal>
    </div>
  );
};

export default CompareCardsModal;
