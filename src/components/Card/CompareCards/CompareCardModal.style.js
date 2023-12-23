import styled from "styled-components";

export const CompareCardModal = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  z-index: 1000;
  width: 50%;
  border-radius: 0.5em;
`;

export const CompareCardOverlay = styled.div`
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
