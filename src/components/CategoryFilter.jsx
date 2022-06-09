import React from "react";

function Filter({ category, setCategory }) {
  return (
    <fieldset>
      <legend>Movie Category</legend>
      <br />
      <label htmlFor="categories">
        All
        <input
          checked={category === "all"}
          type="radio"
          name="categories"
          id="all"
          value="all"
        />
      </label>
    </fieldset>
  );
}

export default Filter;
