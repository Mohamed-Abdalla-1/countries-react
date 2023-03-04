import "./App.css";
import countriesAll from "./countriesAll.json";
import Heading from "./Heading";
import Card from "./Card";
import { useState } from "react";
import Search from "./Search";
import Select from "./Select";

function App() {
  const [region, setRegion] = useState("");
  const [input, setInput] = useState("");

  function changeRegion(event) {
    setRegion(event.target.value);
  }

  function searchInput(event) {
    setInput(event.target.value);
  }

  const countriesToDisplay = countriesAll
    .filter((country) =>
      region === "" || region === "All Region"
        ? true
        : country.region === region
    )
    .filter((country) =>
      country.name.toUpperCase().includes(input.toUpperCase())
    );

  return (
    <div className="App">
      <Heading />
      <Search handleInput={searchInput} />
      <Select handleChange={changeRegion} />
      <Card countriesData={countriesToDisplay} />
    </div>
  );
}

export default App;
