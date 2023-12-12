import React from "react";
import "../../../../App/App.css"

function CardDetails({ cardData }) {
  const currentDate = new Date(cardData?.released_at);
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  let newDate = month + 1 + "/" + date + "/" + year;

  return (
    <>
      <p>Set: {cardData?.set_name}</p>
      <p>Released: {newDate}</p>
      <a target="_blank" rel="noreferrer" href={cardData?.scryfall_uri}>
        <div className="italicText">View on Scryfall</div>
      </a>
      <hr />
    </>
  );
}

export default CardDetails;
