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

  li > #title {
    display: flex;
    float: left;
  }

  li > img {
    display: flex;
    float: right;
  }
  fieldset {
    color: red;
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
