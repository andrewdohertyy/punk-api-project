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

  


  return (
    <>
      <div className="container">
        <div className="container__row">
          <aside>
            <Nav
              beers={beers}
              getBeers={getBeers}
              setURL={setURL}
              setBeers={setBeers}
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
