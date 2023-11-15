import React from 'react'
import { CompareCard } from './CompareCardModal.style'

function CompareCardModal(props) {
// const {modalCard} = props
if (!props.activeImage || props?.modalCard.image_uris.art_crop !== props.activeImage) {
    return null;
  }
  // console.log("PROPS: ", props?.modalCard);
  return (
    <CompareCard onClick={props.onClose}>
      <div
        className={
          props.modalCard?.type_line === "Enchantment — Saga"
            ? "saga"
            : "modalcontent"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <span className="modalheader">
          <div>
            <h1 className="modaltitle">{props.modalCard?.name}</h1>
            <p>{props.modalCard?.artist}</p>
          </div>
          <button
            className="mainButton"
            onClick={() => {
              props.onClose();
            }}
          >
            Close
          </button>
        </span>

        <img
          src={props?.modalCard.image_uris.art_crop}
          alt={props.modalCard?.name}
        />
      </div>
    </CompareCard>
  );
}

export default CompareCardModal