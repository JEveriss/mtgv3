import styled from "styled-components";

export const CardImageWrapper = styled.img`
  border-radius: 4%;
`;

export const FormatLegalities = styled.div`
  summary {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s ease-in;
    padding: 1rem;
    cursor: pointer;
  }
  summary:hover {
    background-color: var(--accent-dark);
  }
  img {
    transition: transform 0.2s ease-in-out;
  }
  details[open] {
    summary img {
      transform: rotate(180deg);
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    :not(:last-child):after {
      content: "•";
      padding: 0 1.5rem;
    }
  }
`;

export const CardTitleWrapper = styled.h1`
  color: #000111;
`;

export const NewCardWrapper = styled.div`
  h1 {
    padding-top: 1rem;
    letter-spacing: 0.8rem;
  }
  .cardBox {
    gap: 1rem;
    display: flex;
    flex-direction: row-reverse;
    > div {
      width: 50%;
    }
  }
  .cardTitle {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    > div {
      width: 50%;
      align-items: baseline;
    }
  }
  .italicText {
    transform: skew(0deg);
    transition: all 0.5s;
    width: fit-content;
    cursor: pointer;
    :hover {
      transform: skew(-15deg);
    }
  }

  a {
    color: #131200;
    width: fit-content;
    text-decoration: none;
    cursor: auto;
  }
  @media only screen and (max-width: 500px) {
    .cardTitle {
      display: contents;
      div {
        width: 100%;
      }
    }
    .cardBox {
flex-direction: column-reverse;
      .cardDetails,
      div {
        width: 100%;
      }
    }
    h1 {
      font-size: 1.5rem;
      letter-spacing: 0.4rem;
    }
  }
`;
