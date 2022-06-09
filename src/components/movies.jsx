import React from "react";
import parse from "html-react-parser";

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
