import React, { useState } from "react";
import CardImage from "./CardComponents/Image";
import CardArtModal from "./CardArtModal";
import CardLegalities from "./CardComponents/Legalities";
import { NewCardWrapper } from "./Card.style";
import "./tempstyle.css";
import ArtistLink from "./CardComponents/ArtistLink";
import CardDetails from "./CardComponents/Details";

function NewCard({ cardData }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <NewCardWrapper>
      {cardData?.card_faces && !cardData.image_uris ? (
        cardData?.card_faces.map((item) => {
          return (
            <>
              <h1>{item.name}</h1>
              <div className="cardTitle">
                <div>
                  <h3>{item.type_line}</h3>
                  <button
                    className="mainButton"
                    onClick={() => {
                      setActiveImage(item.image_uris.art_crop);
                    }}
                  >
                    Enlarge Art
                  </button>
                  <CardArtModal
                    modalCard={item}
                    onClose={() => setActiveImage(null)}
                    activeImage={activeImage}
                  />
                </div>
                <ArtistLink item={item} />
              </div>

              <div className="cardBox">
                <div className="cardDetails">
                  <CardDetails cardData={cardData} />
                  <CardLegalities cardLegalities={cardData.legalities} />
                </div>
                <div className="cardImage">
                  <CardImage card={item} />
                </div>
              </div>
            </>
          );
        })
      ) : (
        <>
          <h1>{cardData.name}</h1>
          <div className="cardTitle">
            <div>
              <h3>{cardData.type_line}</h3>
              <button
                className="mainButton"
                onClick={() => {
                  setActiveImage(cardData.image_uris.art_crop);
                }}
              >
                Enlarge Art
              </button>
              <CardArtModal
                modalCard={cardData}
                onClose={() => setActiveImage(null)}
                activeImage={activeImage}
              />
            </div>
            <ArtistLink item={cardData} />
          </div>

          <div className="cardBox">
            <div className="cardDetails">
              <CardDetails cardData={cardData} />
              <CardLegalities cardLegalities={cardData.legalities} />
            </div>
            <div className="cardImage">
              <CardImage card={cardData} />
            </div>
          </div>
        </>
      )}
    </NewCardWrapper>
  );
}

export default NewCard;
