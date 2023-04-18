import React, { useState } from "react";
import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import { SingleSidedCard, TemplateWrapper } from "../Card.style";
import CardArtModal from "../CardArtModal/index";

function CardTemplate({ fetchData, cardData }) {
  const [show, setShow] = useState(false);

  return (
    <TemplateWrapper>
      <button onClick={fetchData}>New Card</button>

      <CardTitle title={cardData?.name} />
      <SingleSidedCard>
        <CardImage card={cardData} />

        <div className="cardText">
          <button onClick={() => setShow(true)}>Enlarge Art</button>

          <p>{cardData?.type_line}</p>
          <p>{cardData?.mana_cost}</p>
          <p>{cardData?.set_name}</p>
          <p>{cardData?.artist}</p>
          <p>{cardData?.released_at}</p>

          <CardArtModal
            modalCard={cardData}
            onClose={() => setShow(false)}
            show={show}
          />

          {cardData?.games && (
            <ul>
              {cardData?.games.map((v, k) => {
                return <li key={k}>{v}</li>;
              })}
            </ul>
          )}
        </div>
      </SingleSidedCard>
    </TemplateWrapper>
  );
}
export default CardTemplate;

// if a card is "type_line": "Plane..." rotate 90 degrees to the right
// the cards colours should be represented in the background
// loading spinner
