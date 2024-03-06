import React, { useState } from "react";
import CompareCardsModal from "./CompareCardsModal";
import { fblthpData } from "../../data/Data";

export function CompareCards({
  modalButtonText,
  compareCards,
  setCompareCards,
}) {
  const [openCompareCardsModal, setOpenCompareCardsModal] = useState(false);

  const [count, setCount] = useState(0);
  const data = fblthpData;
  console.log(count);

  function twoClick() {
    setOpenCompareCardsModal(true);
    setCount(data[Math.floor(Math.random() * data.length)]);
  }

  return (
    <div>
      {" "}
      {openCompareCardsModal && openCompareCardsModal && (
        <CompareCardsModal
          openCompareCardsModal={openCompareCardsModal}
          setOpenCompareCardsModal={() => setOpenCompareCardsModal(false)}
          compareCards={compareCards}
          setCompareCards={setCompareCards}
          count={count}
        />
      )}
      <button onClick={twoClick} className="mainButton">
        {modalButtonText}
      </button>
    </div>
  );
}
