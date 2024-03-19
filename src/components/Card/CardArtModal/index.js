import React from "react";
import { Modal } from "./CardArtModal.style";
import { cardArtStatus } from "../../../mixpanel";
import LoadingSpinner from "../../Spinner";

function CardArtModal(props) {
  if (
    !props.activeImage ||
    props?.modalCard.image_uris.art_crop !== props.activeImage
  ) {
    return null;
  }
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
            <h2 className="modaltitle">{props.modalCard?.name}</h2>
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

          {props?.modalCard?.image_uris?.art_crop && props?.modalCard?.name ? (
            <img
              src={props?.modalCard?.image_uris?.art_crop}
              alt={props?.modalCard?.name}
              // width="500"
              // height="500"
              loading="lazy"
            />
          ) : (
            <LoadingSpinner />
          )}

      </div>
    </Modal>
  );
}

export default CardArtModal;
