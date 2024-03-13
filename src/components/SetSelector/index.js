import React from "react";

import { SetSelectorWrapper } from "./SetSelector.style";
import { setList } from "../../data/Data";

function SetSelector({ setName, setSetName, cardContext }) {
  const onSetChange = (e) => setSetName(e.target.value);
  // console.log("cardContext: ", cardContext);
  function randomNumb(min, max){
    let ans = Math.random() * (max - min) + min
    console.log(Math.round(ans))
    return Math.round(ans)
}
console.log(randomNumb(-5, 8))
  return (
    <>
      <p className="currentSet">
        Current set is: <b>{cardContext?.set_name}</b>
      </p>
      <SetSelectorWrapper>
        {setList?.map((set) => {
          return (
            <label onClick={()=>randomNumb(-10, 10)}>
              <li key={set?.id} className="container" htmlFor={set?.abbr}>
                <input
                  type="radio"
                  name="setOption"
                  value={set?.abbr}
                  id={set?.abbr}
                  checked={setName === set?.abbr}
                  onChange={onSetChange}
                  degree={randomNumb(-20, 20)}
                />
                <span className="checkmark"></span>
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
