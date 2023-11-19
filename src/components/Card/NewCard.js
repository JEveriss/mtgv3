import React, { useState } from "react";
import CardImage from "./CardImage";
import CardArtModal from "./CardArtModal";
import CardLegalities from "./CardLegalities";
import { NewCardWrapper } from "./Card.style";
import "./tempstyle.css";

function NewCard({ cardData }) {
  const currentDate = new Date(cardData?.released_at);
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  let newDate = month + 1 + "/" + date + "/" + year;

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
                <div className="artistDetails">
                  <h2>art by {item.artist}</h2>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/search?q=${item.artist} art`}
                  >
                    <div className="italicText">
                      Search {item.artist} on Google
                    </div>
                  </a>
                </div>
              </div>

              <div className="cardBox">
                <div className="cardDetails">
                  <p>Set: {cardData?.set_name}</p>
                  <p>Released: {newDate}</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={cardData?.scryfall_uri}
                  >
                    <div className="italicText">View on Scryfall</div>
                  </a>
                  <hr />
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
            <div className="artistDetails">
              <h2>art by {cardData.artist}</h2>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/search?q=${cardData.artist} art`}
              >
                <div className="italicText">
                  Search {cardData.artist} on Google
                </div>
              </a>
            </div>
          </div>

          <div className="cardBox">
            <div className="cardDetails">
              <p>Set: {cardData?.set_name}</p>
              <p>Released: {newDate}</p>
              <a target="_blank" rel="noreferrer" href={cardData?.scryfall_uri}>
                <div className="italicText">View on Scryfall</div>
              </a>
              <hr />
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
