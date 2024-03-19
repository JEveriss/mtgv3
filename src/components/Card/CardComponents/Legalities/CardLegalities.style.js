import styled from "styled-components";

export const FormatLegalities = styled.div`
  h3,
  details {
    margin: 1rem 0;
  }
  ul {
    padding: 6px;
  }
  summary {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
  }
  summary:hover {
    background-color: var(--accent-dark);
    color: var(--accent-light);
  }
  svg {
    transition: transform 0.2s ease-in-out;
  }
  details[open] {
    box-shadow: 6px 5px 11px -1px;
    summary {
      background-color: var(--accent-dark);
      color: var(--accent-light);
    }
    ul {
      background-color: var(--accent-light);
    }
    > summary > svg {
      transform: rotate(180deg);
    }
  }
  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  li {
    :before {
      content: "|";
      color: #999999;
    }
  }
`;
