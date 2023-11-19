import styled from "styled-components";

export const CompareCardModal = styled.div`
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
    border-radius: 4%;
  }
`;
