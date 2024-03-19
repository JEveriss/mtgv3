import React, { useState } from "react";

import { SetSelectorWrapper } from "./SetSelector.style";
import { setList } from "../../data/Data";

function SetSelector({ setName, setSetName, cardContext }) {
  const [randomDegrees, setRandomDegrees] = useState(0);
  const onSetChange = (e) => setSetName(e.target.value);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function randomClick() {
    return setRandomDegrees(getRandomNumber(-30, 30));
  }
  console.log(cardContext);
  const stylez = { transform: `rotate(${randomDegrees}deg)` };
  return (
    <>
      <p className="currentSet">
        Current set is: <b>{cardContext?.set_name}</b>
      </p>

      <SetSelectorWrapper>
        {setList?.map((set, i) => {
          return (
            <label
              title={set?.name}
              key={`${set}+${i}`}
              onClick={randomClick}
            >
              <li
                title={set?.name}
                key={set?.id}
                className="container"
                htmlFor={set?.abbr}
                randomDegrees={randomDegrees}
              >
                <input
                  title={set?.name}
                  type="radio"
                  name="setOption"
                  value={set?.abbr}
                  id={set?.abbr}
                  checked={setName === set?.abbr}
                  onChange={onSetChange}
                />

                <span
                  title={set?.name}
                  style={stylez}
                  className="checkmark"
                ></span>
                {set?.abbr}
              </li>
            </label>
          );
        })}
      </SetSelectorWrapper>
    </>
  );
}

export default SetSelector;
