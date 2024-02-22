import styled from "styled-components";

export const SetSelectorWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 1rem;
  font-size: 1.4rem;
  label {
    text-transform: uppercase;
  }

  input {
    margin-right: 0.2rem;
  }

  li {
    margin: auto;
    display: flex;
    flex-direction: row;

    line-height: 1;
  }

  p {
    margin: 1rem 0;
  }
`;
