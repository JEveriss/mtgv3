import React, { useState } from "react";
import CardImage from "./CardImage";
import CardArtModal from "./CardArtModal";
import CardLegalities from "./CardLegalities";
import { NewCardWrapper } from "./Card.style";

function NewCard({ cardData }) {
  const currentDate = new Date(cardData?.released_at);
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  let newDate = month + 1 + "/" + date + "/" + year;

  const [activeImage, setActiveImage] = useState(null);

  let currentName = cardData.name
  // if (cardData.card_faces){
  //   let 
  // }
  console.log(currentName)

  return (
    <NewCardWrapper>
      {cardData?.card_faces ? (
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
                </div>
                <div className="artistDetails">
                  <h2>art by {item.artist}</h2>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/search?q=${item.artist} art`}
                  >
                    <div className="italicText">Search on Google</div>
                  </a>
                </div>
              </div>

              <div className="cardBox">
                <div className="cardDetails">
                  <p>Set: {cardData?.set_name}</p>
                  <p>Released: {newDate}</p>
                  <a href={cardData?.scryfall_uri}>
                    <div className="italicText">View on Scryfall</div>
                  </a>
                  <hr />
                  <CardLegalities cardLegalities={cardData.legalities} />
                </div>
                <div className="cardImage">
                  <CardImage card={item} />
                </div>
              </div>

              <CardArtModal
                modalCard={item}
                onClose={() => setActiveImage(null)}
                activeImage={activeImage}
              />
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
            </div>
            <div className="artistDetails">
              <h2>art by {cardData.artist}</h2>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/search?q=${cardData.artist} art`}
              >
                <div className="italicText">Search on Google</div>
              </a>
            </div>
          </div>

          <div className="cardBox">
            <div className="cardDetails">
              <p>Set: {cardData?.set_name}</p>
              <p>Released: {newDate}</p>
              <a href={cardData?.scryfall_uri}>
                <div className="italicText">View on Scryfall</div>
              </a>
              <hr />
              <CardLegalities cardLegalities={cardData.legalities} />
            </div>
            <div className="cardImage">
              <CardImage card={cardData} />
            </div>
          </div>

          <CardArtModal
            modalCard={cardData}
            onClose={() => setActiveImage(null)}
            activeImage={activeImage}
          />
        </>
      )}
    </NewCardWrapper>
  );
}

export default NewCard;
