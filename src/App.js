import "./App.css";
import countriesAll from "./countriesAll.json";
import Heading from "./Heading";
import Card from "./countryCard";

function App() {
  return (
    <div className="App">
      <Heading />
      <Card countriesData={countriesAll} />
    </div>
  );
}

export default App;
