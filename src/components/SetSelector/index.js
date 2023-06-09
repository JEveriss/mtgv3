import React from "react";
import { SetSelectorWrapper } from "./SetSelector.style";
import { setList } from "../../data/Data";

function SetSelector({ setName, setSetName, cardContext }) {
  const onSetChange = (e) => setSetName(e.target.value);

  return (
    <>
      <SetSelectorWrapper>
        {setList?.map((set) => {
          return (
            <li key={set?.id}>
              <input
                type='radio'
                name='setOption'
                value={set?.abbr}
                id={set?.abbr}
                checked={setName === set?.abbr}
                onChange={onSetChange}
              />
              <label htmlFor={set?.abbr}>{set?.abbr}</label>
            </li>
          );
        })}
      </SetSelectorWrapper>
      <p>Current set is: <b>{cardContext?.set_name}</b></p>
    </>
  );
}

export default SetSelector;
