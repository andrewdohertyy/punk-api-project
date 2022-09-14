import "./App.scss";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { useState, useEffect } from "react";
import Footer from "./containers/Footer/Footer";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [url, setURL] = useState("https://api.punkapi.com/v2/beers?per_page=30")
 

  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };



  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  },[url]);

  const getAlcoholFilter = () => {
    const highAlcoholFilter = beers.filter((beer) => beer.abv >= 6);
    setBeers(highAlcoholFilter);
  };

  const getAcidityFilter = () => {
    const highAcidityFilter = beers.filter((beer) => beer.ph < 4);
    setBeers(highAcidityFilter);
  };

  const getAgeFilter = () => {
    setURL("https://api.punkapi.com/v2/beers?brewed_before=01-2010?page=1&per_page=30")
  };

  const clearFilters = (e) => {
    getBeers()
    setURL("https://api.punkapi.com/v2/beers?per_page=30")
  }
  return (
    <>
      <div className="container">
        <div className="container__row">
          <aside>
            <Nav
              getAlcoholFilter={getAlcoholFilter}
              getAcidityFilter={getAcidityFilter}
              getAgeFilter={getAgeFilter}
              clearFilters={clearFilters}
            />
          </aside>
        </div>

        <div>
          <Main
            beers={beers}
            setBeers={setBeers}
            searchValue={searchValue}
            getSearchValue={getSearchValue}
          />
        </div>

        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
