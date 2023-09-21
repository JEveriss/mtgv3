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
    gap: 1rem;
  }
  .cardText {
    padding-top: 10rem;
    width: 50%;
  }
  a {
    color: #131200;
    text-decoration: none;
    transition: 0.2s;
    border-bottom: 2px solid transparent;
  }
  a:hover {
    border-bottom: 2px solid #131200;
    font-style: italic;
    transition: 0.5;
  }
`;

export const SingleSidedCard = styled.div`
  display: flex;
`;

export const FormatLegalities = styled.div`
  summary {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    transition: transform 0.2s ease-in-out;
  }

  details[open] summary img {
    transform: rotate(180deg);
  }
`;
