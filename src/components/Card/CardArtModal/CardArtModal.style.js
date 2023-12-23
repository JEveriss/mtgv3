import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #00000096;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  img {
    height: auto;
    width: 100%;
  }
  .saga {
    width: 32vh;
    background-color: #fff;
    border: 2px solid var(--primary-black);
  }
  .modalcontent {
    width: 75vw;
    background-color: #fff;
    border: 2px solid var(--primary-black);
  }
  .modalheader {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
    border-bottom: 2px var(--primary-black) solid;
    align-items: center;
  }
  .modaltitle {
    margin: 0;
  }
`;
