import React from "react";
import parse from "html-react-parser";
import { categories } from "./CategoryFilter";

function Movies({ min, max, category }) {
  //to remove the false positive named movie(automatically generated at first)
  localStorage.removeItem("False Positive");
  let title = "";
  let posterURL = "";
  let release = "";
  let genres = "";
  let genreId = "";
  let list = "";

  const categoryList = Object.entries(categories);
  for (let movieCategory of categoryList) {
    let [categoryString, categoryId] = movieCategory;
    if (category === categoryString) {
      genreId = categoryId;
    }
  }

  for (let [movieTitle, movieValue] of Object.entries(localStorage)) {
    [release, posterURL, ...genres] = movieValue.split(",");
    let [year, month, date] = release.split("-");
    let releaseYear = Number(year);
    title = movieTitle;

    if (category === "all" && releaseYear >= min && releaseYear <= max) {
      list += /*html*/ ` 
      <li>
          <span>${title}</span>
          <img src="${posterURL}" alt="${title}" />
          <span>${release}</span>
      </li>
      `;
    } else if (
      genres.includes(`${genreId}`) &&
      releaseYear >= min &&
      releaseYear <= max
    ) {
      list += /*html*/ ` 
          <li>
              <span>${title}</span>
              <img src="${posterURL}" alt="${title}" />
              <span>${release}</span>
          </li>
          `;
    }
  }

  return <ul>{parse(list)}</ul>;
}

export default Movies;
