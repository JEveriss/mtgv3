import React, { useState } from "react";
import CompareCardsModal from "./CompareCardsModal";

export function Register({ modalButtonText, compareCards }) {
  const [openCompareCardsModal, setOpenCompareCardsModal] = useState(false);

  return (
    <div>
      {" "}
      {openCompareCardsModal && openCompareCardsModal && (
        <CompareCardsModal
          openCompareCardsModal={openCompareCardsModal}
          setOpenCompareCardsModal={() => setOpenCompareCardsModal(false)}
          compareCards={compareCards}
        />
      )}
      <button
        onClick={() => setOpenCompareCardsModal(true)}
        className="mainButton"
      >
        {modalButtonText}
      </button>
    </div>
  );
}
