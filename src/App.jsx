import "./App.scss";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { useState, useEffect } from "react";
import MoreInfo from "./components/MoreInfo/MoreInfo"
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
  },[url], [searchValue]);

 


  return (
    <Router>
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
         
        <Routes>
          <Route path="/" element={
        <div>
          <Main
            beers={beers}
            setBeers={setBeers}
            searchValue={searchValue}
            getSearchValue={getSearchValue}
          />
        </div>
        }
        ></Route>
        <Route path="/moreInfo/:beersID" element={
          <MoreInfo beers={beers}/>
        }></Route>
        <Route path="moreInfo" element={< MoreInfo/>}></Route>

        </Routes>
        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
    </Router>
  );
}

export default App;
