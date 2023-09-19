import React from "react";
import { CardImageWrapper } from "./Card.style";
import "../Testing/Testing.css";

function CardImage({ cardData }) {
  console.log(cardData);
  return (
    <CardImageWrapper>
      {cardData.card_faces ? (
        <>
          {cardData.card_faces.map((face, i) => {
            return (
              <img
                key={i}
                className="cardimage"
                alt={face?.name}
                src={face?.image_uris?.normal}
              />
            );
          })}
        </>
      ) : (
        <div className="card">
          <img
            className="cardimage"
            alt={cardData?.name}
            src={cardData?.image_uris?.normal}
          />
        </div>
      )}
    </CardImageWrapper>
  );
}

export default CardImage;
