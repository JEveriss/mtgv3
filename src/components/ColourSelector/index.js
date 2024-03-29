import { React, useCallback } from "react";
import { WUBRG } from "../../data/Data";
import { SetColourWrapper } from "../ColourSelector/ColourSelector.style";
import { colourSelected } from "../../mixpanel";

export default function ColourSelector({ colourState, setColourState }) {
  const handleFilterChange = useCallback(
    (event) => {
      setColourState((previousState) => {
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
    [setColourState]
  );

  const mainObj = colourState.filters;
  const mainArr = Array.from(mainObj);

  function stylingFunc(j) {
    if (mainArr.includes(j)) {
      return true;
    }
  }
  return (
    <>
        <h3> Select colour filter(s):</h3>
      <SetColourWrapper>
        {WUBRG.map(({ id, category, colour, image }) => (
          <li key={id} onClick={() => colourSelected(colour)}>
            <label
              className={`${
                stylingFunc(category) ? `checkboxIcon-${category}` : "greyedOut"
              } colourIcon`}
            >
              <input
                onChange={handleFilterChange}
                type="checkbox"
                value={category}
              />
              <img src={image} alt={colour} />
            </label>
          </li>
        ))}
      </SetColourWrapper>
    </>
  );
}
