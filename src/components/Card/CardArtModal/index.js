import React from "react";
import { Modal } from "./CardArtModal.style";
import { cardArtStatus } from "../../../mixpanel";

function CardArtModal(props) {
  // const {modalCard} = props
  if (!props.show) {
    return null;
  }
  console.log("PROPS: ", props?.modalCard);
  return (
    <Modal onClick={props.onClose}>
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
              cardArtStatus("closed");
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
    </Modal>
  );
}

export default CardArtModal;
