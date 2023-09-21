import React from "react";
import { setList } from "../data/Data";

function NewSelector() {
  return (
    <div>
      <select>
      {setList?.map((set)=>{
        return <option value={set}>{set?.abbr.toUpperCase()}</option>
      })}

      </select>
    </div>
  );
}

export default NewSelector;
