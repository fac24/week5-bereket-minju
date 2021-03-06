import React from "react";
// import API

function Search({ search }) {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    const URL = "https://api.themoviedb.org/3/search/movie";
    const api_key = import.meta.env.VITE_TMDB_API_KEY;
    let searchURL = `${URL}?api_key=${api_key}&query=${search}`;
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [search]);

  if (search === "") {
    return <div>empty string is unacceptable.</div>;
  } else if (search === false) {
    return <div>Search movie title : )</div>;
  } else {
    const genres = movie.results[0].genre_ids;

    const posterPath = movie.results[0].poster_path;
    const posterURL = `https://image.tmdb.org/t/p/w500${posterPath}`;
    const title = movie.results[0].original_title;
    const release = movie.results[0].release_date;

    // save the user search data to local storage
    localStorage.setItem(title, `${release},${posterURL},${genres}`);

    return <div>{title} is added.</div>;
  }
}

export default Search;
