import React from "react";
//import parse from "html-react-parser";

const categories = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

// try to use this list -> html parse for loop
// but has some problem with checked value,
// so created html and copy and paste it.

// const categoryList = Object.keys(categories);
// let list = "";
// for (let category of categoryList) {
//   list += /*html*/ `
// <label htmlFor="${category}">
// ${category}
// <input
// checked={category === "${category}"}
//   type="radio"
//   name="categories"
//   id="${category}"
//   value="${category}"
//   onChange={(event) => setCategory(event.target.value)}
// />
// </label>
// <br />
// `;
// }

function CategoryFilter({ category, setCategory }) {
  return (
    <fieldset>
      <legend>Movie Category</legend>
      <br />
      <label htmlFor="all">
        All
        <input
          checked={category === "all"}
          type="radio"
          name="categories"
          id="all"
          value="all"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="Action">
        Action
        <input
          checked={category === "Action"}
          type="radio"
          name="categories"
          id="Action"
          value="Action"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Adventure">
        Adventure
        <input
          checked={category === "Adventure"}
          type="radio"
          name="categories"
          id="Adventure"
          value="Adventure"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Animation">
        Animation
        <input
          checked={category === "Animation"}
          type="radio"
          name="categories"
          id="Animation"
          value="Animation"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Comedy">
        Comedy
        <input
          checked={category === "Comedy"}
          type="radio"
          name="categories"
          id="Comedy"
          value="Comedy"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Crime">
        Crime
        <input
          checked={category === "Crime"}
          type="radio"
          name="categories"
          id="Crime"
          value="Crime"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Documentary">
        Documentary
        <input
          checked={category === "Documentary"}
          type="radio"
          name="categories"
          id="Documentary"
          value="Documentary"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Drama">
        Drama
        <input
          checked={category === "Drama"}
          type="radio"
          name="categories"
          id="Drama"
          value="Drama"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Family">
        Family
        <input
          checked={category === "Family"}
          type="radio"
          name="categories"
          id="Family"
          value="Family"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Fantasy">
        Fantasy
        <input
          checked={category === "Fantasy"}
          type="radio"
          name="categories"
          id="Fantasy"
          value="Fantasy"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="History">
        History
        <input
          checked={category === "History"}
          type="radio"
          name="categories"
          id="History"
          value="History"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Horror">
        Horror
        <input
          checked={category === "Horror"}
          type="radio"
          name="categories"
          id="Horror"
          value="Horror"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Music">
        Music
        <input
          checked={category === "Music"}
          type="radio"
          name="categories"
          id="Music"
          value="Music"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Mystery">
        Mystery
        <input
          checked={category === "Mystery"}
          type="radio"
          name="categories"
          id="Mystery"
          value="Mystery"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Romance">
        Romance
        <input
          checked={category === "Romance"}
          type="radio"
          name="categories"
          id="Romance"
          value="Romance"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Science Fiction">
        Science Fiction
        <input
          checked={category === "Science Fiction"}
          type="radio"
          name="categories"
          id="Science Fiction"
          value="Science Fiction"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="TV Movie">
        TV Movie
        <input
          checked={category === "TV Movie"}
          type="radio"
          name="categories"
          id="TV Movie"
          value="TV Movie"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Thriller">
        Thriller
        <input
          checked={category === "Thriller"}
          type="radio"
          name="categories"
          id="Thriller"
          value="Thriller"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="War">
        War
        <input
          checked={category === "War"}
          type="radio"
          name="categories"
          id="War"
          value="War"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />

      <label htmlFor="Western">
        Western
        <input
          checked={category === "Western"}
          type="radio"
          name="categories"
          id="Western"
          value="Western"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />
    </fieldset>
  );
}

export { categories, CategoryFilter };
