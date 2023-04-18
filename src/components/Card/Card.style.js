import styled from "styled-components";

export const CardImageWrapper = styled.div`
  img {
    max-height: 70vh;
  }
  .cardimage {
    border-radius: 4%;
    width: 100%;
  }
`;

export const CardTitleWrapper = styled.h1`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: #000111;
`;

export const TemplateWrapper = styled.div`
  .cardText {
    margin-left: 2rem;
  }
`;

export const SingleSidedCard = styled.div`
  display: flex;
`;
