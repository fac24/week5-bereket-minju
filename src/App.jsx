import React from "react";
import "./App.css";
import YearFilter from "./components/YearFilter";
import Search from "./components/search";
import Movies from "./components/movies";
import CategoryFilter from "./components/CategoryFilter";


function App() {


  const [search, setSearch] = React.useState(false);
  const [min, setMin] = React.useState(1900);
  const [max, setMax] = React.useState(2025);
  const [category, setCategory] = React.useState("all");

  return (
    <main>
      <section className="search-filter">
        <h2>Search Movie / Filter</h2>
        <fieldset className="container">
          <legend>Search Movie</legend>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSearch(event.target.search.value);
            }}
          >
            <label htmlFor="search">
              <input
                type="search"
                name="search"
                id="search-form"
                placeholder="Search for..."
              />
            </label>
             
               <button type="submit">Search</button>
  `
           
          </form>
          <Search search={search}></Search>
        </fieldset>
        <fieldset>
          <legend>Filter</legend>
          <form>
            <YearFilter min={min} setMin={setMin} max={max} setMax={setMax} />
            <CategoryFilter category={category} setCategory={setCategory} />
          </form>
        </fieldset>
      </section>
      <section className="movies">
        <Movies min={min} max={max} />
      </section>
    </main>
  );
}

export default App;
