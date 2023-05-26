import styled, { keyframes } from "styled-components";

export const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingLogo = styled.div`
  display: flex;
  justify-content: center;

  .loadingLogo {
    height: 10rem;
    pointer-events: none;
    animation: ${spinAnimation} infinite 5s linear;
  }
`;
