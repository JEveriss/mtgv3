import styled from "styled-components";

export const FormatLegalities = styled.div`
  summary {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease-in;
    padding: 1rem;
    cursor: pointer;
  }
  summary:hover {
    background-color: var(--accent-dark);
    color: var(--accent-light);
    transition: all 0.2s ease-in;
  }
  img {
    transition: transform 0.2s ease-in-out;
  }
  details[open] {
    summary img {
      transform: rotate(180deg);
    }
  }
  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    /* flex-wrap: wrap; */
  }
  li {
    :before {
      content: "|";
      color: #999999;
    }
  }
`;