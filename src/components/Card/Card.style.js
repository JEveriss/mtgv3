import styled from "styled-components";

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

  a {
    color: #131200;
    width: fit-content;
    text-decoration: none;
    cursor: auto;
  }

  @media only screen and (max-width: 850px) {
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
    .cardImage > img {
      margin: auto;
    }
    h1 {
      font-size: 1.5rem;
      letter-spacing: 0.4rem;
    }
  }
`;
