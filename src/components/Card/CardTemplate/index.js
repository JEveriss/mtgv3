import React, { useState } from "react";
import CardTitle from "../CardTitle";
import { TemplateWrapper } from "../Card.style";
import CardArtModal from "../CardArtModal/index";
import { cardArtStatus, newCardButtonClicked } from "../../../mixpanel";
import CardLegalities from "../CardLegalities";
import CardDetails from "../CardDetails";

function CardTemplate({ fetchData, cardData, colourUrl, imageSrc }) {
  const [show, setShow] = useState(false);
  
  let item;
  cardData.card_faces ? (item = cardData) : (item = cardData.card_faces);
  console.log("ITEM: ", item);

  return (
    <TemplateWrapper>
      <button
        onClick={() => {
          fetchData();
          newCardButtonClicked(cardData);
        }}
      >
        New Card
      </button>

      <div className="templateTop">
        <div>
          {cardData.card_faces ? (
            <>
              {cardData.card_faces.map((face) => {
                return (
                  <>
                    <CardTitle
                      title={face?.name}
                      backgroundColor={cardData?.color_identity}
                      colourUrl={colourUrl}
                    />
                    <img
                      className="cardimage"
                      alt={face?.name}
                      src={face?.image_uris?.normal}
                    />
                    <CardDetails cardData={cardData} />
                    <button
                      onClick={() => {
                        setShow(true);
                        cardArtStatus("opened");
                      }}
                    >
                      Enlarge Art
                    </button>
                    <CardArtModal
                      modalCard={cardData}
                      onClose={() => setShow(false)}
                      show={show}
                    />
                  </>
                );
              })}
            </>
          ) : (
            <div className="card">
              <CardTitle
                title={cardData?.name}
                backgroundColor={cardData?.color_identity}
                colourUrl={colourUrl}
              />
              <img
                className="cardimage"
                alt={cardData?.name}
                src={cardData?.image_uris?.normal}
              />
              <CardDetails cardData={cardData} />
              <CardArtModal
                modalCard={cardData}
                onClose={() => setShow(false)}
                show={show}
              />
            </div>
          )}
        </div>

        <div className="cardText">
          <button
            onClick={() => {
              setShow(true);
              cardArtStatus("opened");
            }}
          >
            Enlarge Art
          </button>

          <hr />
          <CardLegalities cardLegalities={cardData.legalities} />
        </div>
      </div>
    </TemplateWrapper>
  );
}
export default CardTemplate;

// if a card is "type_line": "Plane..." rotate 90 degrees to the right
// the cards colours should be represented in the background
// loading spinner
