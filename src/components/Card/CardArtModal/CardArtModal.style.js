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
  padding: 0.5rem;

  /* button {
    border-radius: 0%;
    border: 1px black solid;
  } */

  img {
    width: 100%;
  }

  .saga {
    width: 32vh;
    background-color: #fff;
    border: 2px solid #000;
  }

  .modalcontent {
    width: 100vh;
    background-color: #fff;
    border: 2px solid #000;
  }

  .modalheader {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
    border-bottom: 2px #000 solid;
  }
  .modaltitle {
    margin: 0;
  }
`;
