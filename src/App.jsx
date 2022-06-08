import React from "react";
import Filter from "./components/filter";
import Search from "./components/search";
// import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [min, setMin] = React.useState(0.5);
  const [max, setMax] = React.useState(9);
  // const [category, setCategory] = React.useState("all");
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <Filter min={min} setMin={setMin} max={max} setMax={setMax} />
          {/* <CategoryFilter category={category} setCategory={setCategory} /> */}
        </form>
      </section>
      <section className="movies">
        <h2>Dishes</h2>
        <Search min={min} max={max} category={category} />
      </section>
    </main>
  );
}

export default App;
