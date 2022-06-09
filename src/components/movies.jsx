import React from "react";
import parse from "html-react-parser";

function Movies() {
  localStorage.removeItem("False Positive");
  let title = "";
  let posterURL = "";
  let release = "";
  let list = "";

  for (let [key, value] of Object.entries(localStorage)) {
    [release, posterURL] = value.split(",");
    title = key;
    list += /*html*/ ` 
        <li>
            <span>${title}</span>
            <img src="${posterURL}" alt="${title}" />
            <span>${release}</span>
        </li>
        `;
  }

  return <ul>{parse(list)}</ul>;
}

export default Movies;
