import React from "react";
// import API

function Search(props) {
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((result) => result.json())
      .then((data) => setSearch(data));
  });

  if (!search) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            placeholder="Search for..."
            value={search}
          />
        </label>
      </div>
    );
  }
}

export default Search;
