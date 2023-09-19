import React from "react";

function CardLegalities({ cardLegalities }) {
  //   const legalKey = Object.keys(cardLegalities);
  //   const legalVal = Object.values(cardLegalities);
  //   console.log("Key: ", legalKey, "Val: ", legalVal);

  const legalObject = Object.entries(cardLegalities);
  //   const legalKeys = Object.keys(cardLegalities);
  const legalVals = Object.values(cardLegalities);

  legalVals.map((item) => {
    return item.toUpperCase();
  });

  let legalArr = [];
  let nonLegalArr = [];

  legalObject.forEach((item) => {
    if (item[1].includes("not_")) {
      nonLegalArr.push(item);
      return nonLegalArr;
    } else legalArr.push(item);
    return legalArr;
  });
  console.log("Legal: ", legalArr);
  console.log("Not Legal: ", nonLegalArr);

  return (
    <>
      Format Legalities
      <details>
        <summary>Legal</summary>
        <ul>
          {legalArr.map((item, i) => {
            return (
              <li key={i}>
                {item[0][0].toUpperCase() + item[0].substring(1).toLowerCase()}:{" "}
                {item[1].toUpperCase()}{" "}
              </li>
            );
          })}
        </ul>
      </details>
      <details>
        <summary>Not-Legal</summary>
        <ul>
          {nonLegalArr.map((item, i) => {
            return (
              <li key={i}>
                {item[0][0].toUpperCase() + item[0].substring(1).toLowerCase()}:{" "}
                {item[1].replace("_", " ").toUpperCase()}{" "}
              </li>
            );
          })}
        </ul>
      </details>
    </>
  );
}

export default CardLegalities;
