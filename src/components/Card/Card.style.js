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
  details[open] summary img {
    transform: rotate(180deg);
  }
`;
export const CardTitleWrapper = styled.h1`
  color: #000111;
`;

export const NewCardWrapper = styled.div`
  .cardBox {
    gap:1rem;
    display: flex;
    flex-direction: row-reverse;
    > div {
      width: 50%;
    }
  }

  a {
    color: #131200;
    text-decoration: none;
    transition: 0.2s;
    border-bottom: 0.2rem solid transparent;
  }

  a:hover {
    border-bottom: 0.2rem solid #131200;
    font-style: italic;
    transition: 0.5;
  }
`;
