import React from "react";

function Filter({ min, max, setMin, setMax }) {
  return (
    <fieldset>
      <legend>Movie Year</legend>
      <span>
        {min} ~ {max}
      </span>
      <br />
      <label htmlFor="start">
        Start
        <input
          type="range"
          id="start"
          min="1900"
          max="2025"
          step="5"
          value={min}
          onChange={(event) => setMin(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="end">
        End
        <input
          type="range"
          id="end"
          min="1900"
          max="2025"
          step="5"
          value={max}
          onChange={(event) => setMax(event.target.value)}
        />
      </label>
    </fieldset>
  );
}

export default Filter;
