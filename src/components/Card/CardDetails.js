import React from "react";

function CardDetails({ cardData }) {
  const currentDate = new Date(cardData?.released_at);
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  let newDate = month + 1 + "/" + date + "/" + year;
  return (
    <div>
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
    </div>
  );
}

export default CardDetails;
