import { React, useState, useCallback } from "react";
import { WUBRG } from "../../data/Data";
import {
  ColoursListWrapper,
  SetColourWrapper,
} from "../ColourSelector/ColourSelector.style";

export default function ColourSelector() {
  const [state, setState] = useState({
    colours: WUBRG,
    filters: new Set(),
  });

  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        // TODO: Need to understand this 'Set' better
        let filters = new Set(previousState.filters);
        let colours = WUBRG;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }
        // TODO: Need to check this
        if (filters.size) {
          colours = colours.filter((colour) => {
            return filters.has(colour.category);
          });
        }

        return {
          filters,
          colours,
        };
      });
    },
    [setState]
  );

  const mainObj = state.filters;
  const mainArr = Array.from(mainObj);

  const testFunc = function (j) {
    if (mainArr.includes(j)) {
      return true;
    }
  };

  //!!
  // console.log("STATE: ", mainArr);
  //!!
  return (
    <>
      <SetColourWrapper>
        {WUBRG.map(({ id, category, colour, image, fillcolor }) => (
          <li key={id}>
            <label>
              <div
                className={
                  testFunc(category)
                    ? `checkboxIcon-${category} colourIcon`
                    : "greyedOut colourIcon"
                }>
                <input
                  onChange={handleFilterChange}
                  type="checkbox"
                  value={category}
                />
                <img fill={'black'} src={image} alt={colour} />
              </div>
            </label>
          </li>
        ))}
      </SetColourWrapper>

      <ColoursListWrapper>
        {state.colours.map((colour) => (
          <li key={colour.id}>
            <h2>{colour.colour}</h2>
          </li>
        ))}
      </ColoursListWrapper>
    </>
  );
}

// !! if state.filters contains category return greyedScale else not
