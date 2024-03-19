import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.2rem 1rem;
  font-size: 2rem;
  border-radius: 45px;
  border: var(--primary-black) 2px solid;
  background-color: var(--accent-light);
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    color: var(--accent-light);
    background-color: var(--accent-dark);
    transition: all 0.1s ease-in;
  }
  :active {
    transform: scale(0.95);
  }
  :disabled,
  [disabled] {
    :hover {
      background-color: var(--accent-light);
      cursor: default;
      color: #1010104D;
    }
  }
`;
