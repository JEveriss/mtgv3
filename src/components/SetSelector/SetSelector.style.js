import styled from "styled-components";

export const SetSelectorWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 1rem;
  font-size: 1.4rem;
  label {
    text-transform: uppercase;
  }

  /* input {
    margin-right: 0.2rem;
  } */

  li {
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    line-height: 1;
  }

  p {
    margin: 1rem 0;
  }
`;

// /* The container */
// .container {
//   display: block;
//   position: relative;
//   padding-left: 35px;
//   margin-bottom: 12px;
//   cursor: pointer;
//   font-size: 22px;
// width: fit-content;
// block-size: fit-content;

//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

// /* Hide the browser's default radio button */
// .container input {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
// }

// /* Create a custom radio button */
// .checkmark {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 25px;
//   width: 25px;
//   background-color: #eee;
//   border-radius: 50%;
// }

// /* On mouse-over, add a grey background color */
// .container:hover input ~ .checkmark {
//   background-color: #ccc;
// }

// /* When the radio button is checked, add a blue background */
// .container input:checked ~ .checkmark {
//   background-color: crimson;
// }

// /* Create the indicator (the dot/circle - hidden when not checked) */
// .checkmark:after {
// font-family: helvetica;
//   content: "X";
// width:100%;
//   display: none;
//   margin: 0 auto;
//   text-align:center;

// }

// /* Show the indicator (dot/circle) when checked */
// .container input:checked ~ .checkmark:after {
//   display: block;
// }

// /* Style the indicator (dot/circle) */
// .container .checkmark:after {
//  	top: 9px;
// }
