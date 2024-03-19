import React from "react";
import { fblthpData } from "../../data/Data";
import { NoCardWrapper } from "./NoCards.style";
let data = fblthpData;

function NoCard({ count }) {
  return (
    <NoCardWrapper>
    <h2>You haven't added any cards yet...</h2>
      <img src={count?.link} alt={data?.name} />
    </NoCardWrapper>
  );
}

export default NoCard;
