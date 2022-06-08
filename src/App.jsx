import React from "react";
import Filter from "./components/filter";
import Search from "./components/search";
// import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [search, setSearch] = React.useState(false);

  const [min, setMin] = React.useState(0.5);
  const [max, setMax] = React.useState(9);
  // const [category, setCategory] = React.useState("all");
  return (
    <main>
      <section className="filters">
        <h1>Filter</h1>
        <form>
          {/* <Filter min={min} setMin={setMin} max={max} setMax={setMax} /> */}
          {/* <CategoryFilter category={category} setCategory={setCategory} /> */}
        </form>
      </section>
      <section className="movies">
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
      </section>
    </main>
  );
}

export default App;
