import React from "react";
import { FormatLegalities } from './CardLegalities.style'
import { Chevron } from "../../../../assets/Chevron";

function CardLegalities({ cardLegalities }) {
  const legalObject = Object?.entries(cardLegalities);
  const legalVals = Object?.values(cardLegalities);

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

  return (
    <FormatLegalities>
      Format Legalities:
      <details>
        <summary>
          Legal <Chevron />
        </summary>
        <ul>
          {legalArr?.map((item, i) => {
            return (
              <li key={i}>
                {item[0][0]?.toUpperCase() + item[0]?.substring(1)?.toLowerCase()}{" "}
              </li>
            );
          })}
        </ul>
      </details>
      <details>
        <summary>
          Not-Legal <Chevron />
        </summary>
        <ul>
          {nonLegalArr?.map((item, i) => {
            return (
              <li key={i}>
                {item[0][0]?.toUpperCase() + item[0]?.substring(1)?.toLowerCase()}{" "}
              </li>
            );
          })}
        </ul>
      </details>
    </FormatLegalities>
  );
}

export default CardLegalities;
