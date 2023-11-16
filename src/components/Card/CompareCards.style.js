import styled from "styled-components";

export const CompareCard = styled.div`
  display: block;

  h2 {
    text-overflow: ellipsis;
    white-space: no-wrap;
    overflow: hidden;
    max-width: 400px;
  }
  .compareCardWrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
  }
  img {
    border-radius: 5px;
  }
`;
