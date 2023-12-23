import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.2rem 1rem;
  border-radius: 45px;
  border: var(--primary-black) 2px solid;
  background-color: var(--accent-light);
  cursor: pointer;
  transition: all 0.2s ease-in;
  height: 3rem;

  :hover {
    color: var(--accent-light);
    background-color: var(--accent-dark);
    transition: all 0.2s ease-in;
  }
  :active {
    transform: scale(0.95);
  }
  .image[fadeIn="1"] {
    animation: fadeIn 1s 1;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
