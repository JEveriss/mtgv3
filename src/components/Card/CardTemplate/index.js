import React, { useState } from "react";
import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import { TemplateWrapper } from "../Card.style";
import CardArtModal from "../CardArtModal/index";
import { cardArtStatus, newCardButtonClicked } from "../../../mixpanel";
import CardLegalities from "../CardLegalities";

function CardTemplate({ fetchData, cardData, colourUrl }) {
  const [show, setShow] = useState(false);

  // const newDate = new Date(cardData?.released_at).toDateString();
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  let newDate = month + 1 + "/" + date + "/" + year;

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

      <CardTitle
        title={cardData?.name}
        backgroundColor={cardData.color_identity}
        colourUrl={colourUrl}
      />
      <div className="templateTop">
        <CardImage card={cardData} />

        <div className="cardText">
          <button
            onClick={() => {
              setShow(true);
              cardArtStatus("opened");
            }}
          >
            Enlarge Art
          </button>
          {cardData?.type_line.includes("Creature") ? (
            <p>
              {" "}
              {cardData?.type_line.includes("Creature")
                ? cardData.type_line.split("—")[0]
                : cardData?.type_line}
            </p>
          ) : null}

          <p>
            Type:{" "}
            {cardData?.type_line.includes("Creature")
              ? cardData.type_line.split("—")[1]
              : cardData?.type_line}
          </p>

          {cardData?.cmc < 0 ? null : (
            <p title="Converted Mana Cost">CMC: {cardData?.cmc}</p>
          )}
          <p>Set: {cardData?.set_name}</p>
          <p>Artist: {cardData?.artist}</p>
          <p>Released: {newDate}</p>
          <a href={cardData?.scryfall_uri}>View on Scryfall</a>
          <hr />
          <CardLegalities cardLegalities={cardData.legalities} />
        </div>

        <CardArtModal
          modalCard={cardData}
          onClose={() => setShow(false)}
          show={show}
        />
        {/* {cardData?.games && (
            <ul>
              {cardData?.games.map((v, k) => {
                return <li key={k}>{v}</li>;
              })}
            </ul>
          )} */}
      </div>
    </TemplateWrapper>
  );
}
export default CardTemplate;

// if a card is "type_line": "Plane..." rotate 90 degrees to the right
// the cards colours should be represented in the background
// loading spinner
