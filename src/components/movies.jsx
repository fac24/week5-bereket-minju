import React from "react";
import { categories } from "./CategoryFilter";
import { Container } from "./styles/Container.styled";
import { Header } from "./styles/Header.styled";

import styled from "styled-components";

function Movies({ min, max, category }) {
  //to remove the false positive named movie(automatically generated at first)
  localStorage.removeItem("False Positive");
  let list = [];
  let genreId = "";
  for (let movieCategory of Object.entries(categories)) {
    let [categoryString, categoryId] = movieCategory;
    if (category === categoryString) {
      genreId = categoryId;
    }
  }
  for (let [movieTitle, movieValue] of Object.entries(localStorage)) {
    let [release, posterURL, ...genres] = movieValue.split(",");
    let [year] = release.split("-");
    let releaseYear = Number(year);
    if (category === "all" && releaseYear >= min && releaseYear <= max) {
      list.push(
        <li>
          <span>{movieTitle}</span>
          <img src={posterURL} alt={movieTitle} />
          <span>{release}</span>
        </li>
      );
    } else if (
      genres.includes(String(genreId)) &&
      releaseYear >= min &&
      releaseYear <= max
    ) {
      list.push(
        <Container>
        
          <li>
            <span id="title">{movieTitle}</span>
            <img src={posterURL} alt={movieTitle} />
            <span id="release">{release}</span>
           
          </li>
        
        </Container>
      );
    }
  }

  return (
    
      <ul>{list}</ul>
    
  );
}

export default Movies;
