import React from "react";
import Modal from "./Modal";
import {
  CompareCardsWrapper,
  CompareCardsCard,
} from "./CompareCardsModal.style";
import Button from "../Button";
import NoCard from "../NoCards";

const CompareCardsModal = ({
  openCompareCardsModal,
  setOpenCompareCardsModal,
  compareCards,
  setCompareCards,
  count
}) => {

  function RemoveDash(x) {
    return x.includes("—") ? x.split("—")[0] : x;
  }

  const deleteById = (index) => {
    setCompareCards((oldVals) => {
      return oldVals.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <Modal open={openCompareCardsModal}>
        <div>
          <Button
            className="mainButton"
            text={"Close"}
            onClick={() => setOpenCompareCardsModal(false)}
          ></Button>
        </div>
        {compareCards.length > 0 ? (
          <CompareCardsWrapper>
            {compareCards?.map((item, i) => {
              return (
                <CompareCardsCard key={i}>
                  <Button
                    text={"Remove"}
                    onClick={() => deleteById(i)}
                  ></Button>
                  <h2>{item.name}</h2>

                  <img alt={item?.name} src={item?.image} />

                  <ul>
                    <li>TYPE: {RemoveDash(item?.type_line)}</li>
                    <li>RARITY: {item?.rarity}</li>
                    <li>EUR: {item?.eur ? `€${item?.eur}` : 'Unavailable'} </li>
                    {/* {item?.eur ? <li>EUR: {`€${item?.eur}`}</li> : "Unavailable"} */}
                    {/* {item?.power ? <li>POWER: {item?.power}</li> : null}
                    {item?.toughness ? (
                      <li>TOUGHNESS: {item?.toughness}</li>
                    ) : null} */}
                  </ul>
                </CompareCardsCard>
              );
            })}
          </CompareCardsWrapper>
        ) : (

            
            <NoCard count={count} />

        )}
      </Modal>
    </div>
  );
};

export default CompareCardsModal;
