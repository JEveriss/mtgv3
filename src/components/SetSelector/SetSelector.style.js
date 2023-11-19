import styled from "styled-components";

export const SetSelectorWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 1.4rem;
  label {
    text-transform: uppercase;
  }

  input {
    margin-right: 0.2rem;
  }

  li {
    display: flex;
    flex-direction: row;
    margin: 0 0.5rem;
    line-height: 1;
  }

  p {
    margin: 1rem 0;
  }
`;
