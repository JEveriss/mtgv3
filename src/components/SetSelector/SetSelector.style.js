import styled from "styled-components";

export const SetSelectorWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  flex-wrap: wrap;

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
  }

  p {
    margin: 1rem 0;
  }
`;
