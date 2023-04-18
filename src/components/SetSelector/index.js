import React from "react";
import { SetSelectorWrapper } from "./SetSelector.style";

function SetSelector({ setName, setSetName }) {
  const onSetChange = (e) => setSetName(e.target.value);

  const setList = [
    { id: 1, name: "sld" },
    { id: 2, name: "mid" },
    { id: 3, name: "neo" },
    { id: 4, name: "one" },
    { id: 5, name: "dmu" },
    { id: 6, name: "bro" },
  ];

  return (
    <SetSelectorWrapper>
      {setList.map((set) => {
        return (
          <li key={set.id}>
            <input
              type="radio"
              name="setOption"
              value={set.name}
              id={set.name}
              checked={setName === set.name}
              onChange={onSetChange}
            />
            <label htmlFor={set.name}>{set.name}</label>
          </li>
        );
      })}
      <p>Current set is {setName}</p>
    </SetSelectorWrapper>
  );
}

export default SetSelector;
