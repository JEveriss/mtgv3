import React, { useState } from "react";
import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import { SingleSidedCard, TemplateWrapper } from "../Card.style";
import CardArtModal from "../CardArtModal/index";
import { cardArtStatus, newCardButtonClicked } from "../../../mixpanel";

function CardTemplate({ fetchData, cardData, colourUrl }) {
  const [show, setShow] = useState(false);

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

      <CardTitle title={cardData?.name} backgroundColor={cardData.color_identity} colourUrl={colourUrl} />
      <SingleSidedCard>
        <CardImage card={cardData} />

        <div className='cardText'>
          <button
            onClick={() => {
              setShow(true);
              cardArtStatus("opened");
            }}
          >
            Enlarge Art
          </button>

          <p>{cardData?.type_line}</p>
          {cardData?.cmc < 0 ? null : <p>CMC: {cardData?.cmc}</p>}
          <p>{cardData?.set_name}</p>
          <p>{cardData?.artist}</p>
          <p>{cardData?.released_at}</p>

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
      </SingleSidedCard>
    </TemplateWrapper>
  );
}
export default CardTemplate;

// if a card is "type_line": "Plane..." rotate 90 degrees to the right
// the cards colours should be represented in the background
// loading spinner
