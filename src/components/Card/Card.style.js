import styled from "styled-components";

export const CardImageWrapper = styled.div`
  img {
    display: flex;
    flex-direction: column;
  }
  .cardimage {
    max-height: 65vh;
    border-radius: 4%;
    width: 100%;
  }
`;

export const CardTitleWrapper = styled.h1`
  color: #000111;
`;

export const TemplateWrapper = styled.div`
  .templateTop {
    display: flex;
  }
  .cardText {
    margin-left: 2rem;
    padding-top: 10rem;
    width: 50%;
  }
`;

export const SingleSidedCard = styled.div`
  display: flex;
`;
