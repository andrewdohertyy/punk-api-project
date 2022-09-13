import "./App.scss";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import { useState, useEffect } from "react";

function App() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };
  useEffect(() => {
    getBeers();
  }, []);

  const getAlcoholFilter = () => {
    const highAlcoholFilter = beers.filter((beer) => beer.abv >= 6);
    setBeers(highAlcoholFilter);
  };

  const getAcidityFilter = () => {
    const highAcidityFilter = beers.filter((beer) => beer.ph < 4);
    setBeers(highAcidityFilter);
  };

  // const getAgeFilter = () => {
    //const classicAgeFilter = beers.filter((beer) => beer.first_brewed);
  // setBeers(classicAgeFilter);
  // }

 




const getSearchFilter = () => {
  console.log(query);
  const searchFilter = beers.filter((beer) => beer.name.toLowerCase().includes(query))
  setQuery(searchFilter);
}







  return (
    <div className="container">
      <header className="container__header">
        <h1>PUNK API</h1>
      </header>

      <div>
        <Nav
          getAlcoholFilter={getAlcoholFilter}
          getAcidityFilter={getAcidityFilter}
          getBeers={getBeers}
        />
      </div>

      <div>
        <Search getSearchFilter={getSearchFilter} setQuery={setQuery}/>
      </div>

      <div>
        <Main beers={beers} />
      </div>

      <div>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
