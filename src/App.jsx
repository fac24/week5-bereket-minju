import React from "react";
import Filter from "./components/filter";
import Search from "./components/search";
import Movies from "./components/movies";
// import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [search, setSearch] = React.useState(false);

  const [min, setMin] = React.useState(0.5);
  const [max, setMax] = React.useState(9);
  // const [category, setCategory] = React.useState("all");

  return (
    <main>
      <section className="search-filter">
        <h2>Search Movie</h2>
        <div className="container">
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
          </form>
          <Search search={search}></Search>
        </div>
        <div>
          <h1>Filter</h1>
          <form>
            {/* <Filter min={min} setMin={setMin} max={max} setMax={setMax} /> */}
            {/* <CategoryFilter category={category} setCategory={setCategory} /> */}
          </form>
        </div>
      </section>
      <section className="movies">
        <Movies /> 
      </section>
    </main>
  );
}

export default App;
