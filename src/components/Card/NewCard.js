import React from "react";
import CardImage from "./CardImage";
import CardArtModal from "./CardArtModal";
import { useState } from "react";

function NewCard({ cardData }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      {cardData?.card_faces ? (
        cardData?.card_faces.map((item) => {
          return (
            <>
            <div style={{width: '200%'}}>
                <h1>{item.name}</h1>
                <h2>{item.artist}</h2>
                <h3>{item.type_line}</h3>
                <button
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Enlarge Art
                </button>
              </div>
              <CardImage card={item} />
              <CardArtModal
                modalCard={item}
                onClose={() => setShow(false)}
                show={show}
              />
            </>
          );
        })
      ) : (
        <>
          <div style={{width: '200%'}}>
            <h1>{cardData.name}</h1>
            <h2>{cardData.artist}</h2>
            <h3>{cardData.type_line}</h3>
            <button
              onClick={() => {
                setShow(true);
              }}
            >
              Enlarge Art
            </button>
          </div>
          <CardImage card={cardData} />
          <CardArtModal
            modalCard={cardData}
            onClose={() => setShow(false)}
            show={show}
          />
        </>
      )}
    </div>
  );
}

export default NewCard;
