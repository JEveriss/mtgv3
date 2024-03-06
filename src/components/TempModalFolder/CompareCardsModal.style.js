import styled from "styled-components";

export const CompareCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  /* justify-content: space-between; */
  margin: 0 1rem;
`;

export const CompareCardsCard = styled.div`
  background-color: #fff1d95c;
  border-radius: 5px;
  border: 2px solid #fff1d9;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem;
  max-width: 300px;
  padding: 0.5rem;
  h2 {
    flex: 1;
  }
  img {
    border-radius: 12px;
  }
`;
