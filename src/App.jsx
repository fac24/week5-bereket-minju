import React from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = React.useState(null);
  const URL = "https://api.themoviedb.org/3/search/movie";
  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const searchKeyword = "django";
  const searchURL = `${URL}?api_key=${api_key}&query=${searchKeyword}`;

  React.useEffect(() => {
    fetch(searchURL)
      .then((result) => result.json())
      .then((movie) => {
        console.log(movie);
        const posterPath = movie.results[0].poster_path;
        const posterURL = `https://image.tmdb.org/t/p/w500${posterPath}`;
        const title = movie.results[0].original_title;
        const release = movie.results[0].release_date;
        console.log(title, release, posterURL);
        setMovie(movie);
      });
  });
  if (!movie) {
    return <div>Loading...</div>;
  } else {
    return <div>Week5 client side app</div>;
  }
}

export default App;
