import styled from "styled-components";

export const Container = styled.section`
   {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: black;
    color: white;
    width: 100vw;
  }

  input {
    padding: 0.4em;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  li > img {
    padding: 1em;
    margin: 5px;
    border: 2px solid red;
    border-radius: 5px;
  }
  fieldset {
    color: red;
  }

  li > span {
    font-weight: bold;
    font-styled: ;
  }
  button {
    background-color: red;
    padding: 0.5em;
    margin-left: 0.3em;
  }

  .movies {
    display: flex;
    justify-content: center;
  }
`;
