import "./App.scss";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  const [beers, setBeers] = useState([]);
  

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



  return (
    <>
      <header>
        <Header header={"PUNK API"}/>
      </header>


      <div className="container">
        <div className="container__row">
          <aside>
            <Nav
              getAlcoholFilter={getAlcoholFilter}
              getAcidityFilter={getAcidityFilter}
              getBeers={getBeers}
            />
          </aside>

          <div>
            <Search 
              beers={beers}
              setBeers={setBeers} 
            />
          </div>
        </div>
      

      <div>
        <Main beers={beers} />
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
