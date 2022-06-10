import React from "react";

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

function CategoryFilter({ category, setCategory }) {
  return (
    <fieldset>
      <legend>Movie Category</legend>
      <br />
      <label htmlFor="all" key="all">
        All
        <input
          key="all"
          checked={category === "all"}
          type="radio"
          name="categories"
          id="all"
          value="all"
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <br />
      {Object.keys(categories).map((key) => (
        <>
          <label htmlFor={key} key={key}>
            {key}
            <input
              key={key}
              checked={category === key}
              type="radio"
              name="categories"
              id={key}
              value={key}
              onChange={(event) => setCategory(event.target.value)}
            />
          </label>
          <br />
        </>
      ))}
    </fieldset>
  );
}

export { categories, CategoryFilter };
