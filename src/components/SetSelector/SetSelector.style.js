import styled from "styled-components";

export const SetSelectorWrapper = styled.ul`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: auto auto auto auto auto;
  row-gap: 1rem;
  cursor: pointer;

  label {
    text-transform: uppercase;
    cursor: pointer;
  }

  li input {
    position: absolute;
    opacity: 0;
  }

  .checkmark {
    display: flex;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }

  li:hover input ~ .checkmark {
    background-color: #ccc;
  }

  li input:checked ~ .checkmark {
    background-color: var(--accent-light);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  li input:checked ~ .checkmark:after {
    display: flex;
  }

  li .checkmark:after {
    content: "X";
    transform: ${(props) => (props.degree ? 'rotate'(props.degree) : '100deg')};
    /* cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')}; */
    /* width: ${(props) => (props.degree ? props.degree : 100)}; */
    font-size: 33px;
  }

  li {
    display: flex;
    flex-direction: column;
    /* cursor: pointer; */
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  p {
    margin: 1rem 0;
  }
`;

// .container {
// display: flex;
// flex-direction:column;
// cursor: pointer;
// align-items:center;
// -webkit-user-select: none;
// -moz-user-select: none;
// -ms-user-select: none;
// user-select: none;
// }
