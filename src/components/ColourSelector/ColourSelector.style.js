import styled from "styled-components";

export const SetColourWrapper = styled.ul`
  display: flex;
  min-height: 10rem;

  li {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    position: absolute;
    display: contents;
  }

  label {
    display: contents;
    position: absolute;
    cursor: pointer;
  }

  img {
    height: 5rem;
    position: relative;
    :active {
      transform: scale(0.95);
    }
  }

  .greyedOut {
    filter: grayscale(1);
  }

  .colourIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .checkboxIcon-w {
    background-color: var(--white);
    box-shadow: 0px 0px 10px 10px var(--white);
  }
  .checkboxIcon-u {
    background-color: var(--blue);
    box-shadow: 0px 0px 10px 10px var(--blue);
  }
  .checkboxIcon-b {
    background-color: var(--black);
    box-shadow: 0px 0px 10px 10px var(--black);
  }
  .checkboxIcon-r {
    background-color: var(--red);
    box-shadow: 0px 0px 10px 10px var(--red);
  }
  .checkboxIcon-g {
    background-color: var(--green);
    box-shadow: 0px 0px 10px 10px var(--green);
  }
  .checkboxIcon-colorless {
    background-color: var(--colorless);
    box-shadow: 0px 0px 10px 10px var(--colorless);
  }

  @media only screen and (max-width: 850px) {
    img {
      height: 2.5rem;
    }
  }
`;

export const ColoursListWrapper = styled.ul``;
