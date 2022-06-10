import React from "react";
import parse from "html-react-parser";
import { Container } from "./styles/Container.styled";

function Movies({ min, max }) {
  //to remove the false positive named movie(automatically generated at first)
  localStorage.removeItem("False Positive");
  let title = "";
  let posterURL = "";
  let release = "";
  let list = "";

  for (let [key, value] of Object.entries(localStorage)) {
    [release, posterURL] = value.split(",");
    let [year, month, date] = release.split("-");
    let releaseYear = Number(year);
    if (releaseYear >= min && releaseYear <= max) {
      title = key;
      list += /*html*/ ` 
     
          <Container>
          <li>
              <Header><span id="title">${title}</span></Header>
              <img src="${posterURL}" alt="${title}" />
              <span id="release">${release}</span>
          </li>
          </Container>
          `;
    }
  }

  return (
    <Container>
      <ul>{parse(list)}</ul>
    </Container>
  );
}

export default Movies;
