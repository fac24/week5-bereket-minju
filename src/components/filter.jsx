import React from "react";

function Filter(props) {
  return <div>
            <form>
          <fieldset>
            <legend>Movie Title</legend>
            <label htmlFor="Movie-title">
              Movie Title
              <input
                type="range"
                id="movie-title"
                min="0.5"
                max="10"
                step="0.25"
                value={props.min}
                onSubmit={(event) => props.setMin(event.target.value)}
              />
            </label>
            <label htmlFor="Movie-category">
              Movie category
              <input
                type="range"
                id="movie-category"
                min="0.5"
                max="10"
                step="0.25"
                value={props.max}
                onSubmit={(event) => props.setMax(event.target.value)}
              />
            </label>
          </fieldset>
        </form>

  </div>;
}

export default Filter;
