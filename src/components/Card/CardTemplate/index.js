// import React, { useState } from "react";
// import CardImage from "../CardImage";
// import CardTitle from "../CardTitle";
import { TemplateWrapper } from "../Card.style";
// import CardArtModal from "../CardArtModal/index";
import { newCardButtonClicked } from "../../../mixpanel";
import CardLegalities from "../CardLegalities";
import NewCard from "../NewCard";

function CardTemplate({ fetchData, cardData, colourUrl }) {
  // const [show, setShow] = useState(false);

  // const newDate = new Date(cardData?.released_at).toDateString();
  const currentDate = new Date(cardData?.released_at);
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  let newDate = month + 1 + "/" + date + "/" + year;

  if (cardData.card_faces) {
    console.log("CARD FACES: ", cardData.card_faces);
  }

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
        <NewCard cardData={cardData} />

        <div className="cardText">
          <p>Set: {cardData?.set_name}</p>
          <p>Released: {newDate}</p>
          <a href={cardData?.scryfall_uri}>View on Scryfall</a>
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
