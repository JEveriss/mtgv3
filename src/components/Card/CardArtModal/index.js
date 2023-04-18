import React from "react";
import { Modal } from "./CardArtModal.style";

const CardArtModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <Modal onClick={props.onClose}>
      <div
        className={
          props.modalCard?.type_line === "Enchantment — Saga" ? "saga" : "modalcontent"
        }
        onClick={(e) => e.stopPropagation()}>
        <span className="modalheader">
          <div>
            <h1 className="modaltitle">{props.modalCard?.name}</h1>
            <p>{props.modalCard?.artist}</p>
          </div>
          <button onClick={props.onClose}>Close it up</button>
        </span>
        <img
          src={props?.modalCard.image_uris.art_crop}
          alt={props.modalCard?.name}
        />
      </div>
    </Modal>
  );
};

export default CardArtModal;
