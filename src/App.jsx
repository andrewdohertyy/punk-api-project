import "./App.scss";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { useState, useEffect } from "react";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import brewdog from "./assets/sports.png";
import { Link } from "react-router-dom";

function App() {

  //states are here
  const [beers, setBeers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [url, setURL] = useState(
    "https://api.punkapi.com/v2/beers?per_page=30"
  );
  const [toggleNav, setToggleNav] = useState(true);


  //function for changing state with a search
  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };


  //gets all the beers from api
  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };


  //use effect set for all values that need it
  useEffect(
    () => {
      getBeers();
    },
    [url],
    [searchValue]
  );

    //when the use clicks the more info the nav will go away
  const hideNav = () => {
    setToggleNav(!toggleNav);
  };


  //layout and routes
  return (
    <Router>
      <>
        <div className="container">
          <div className="container__row">
            <aside>
              {toggleNav && (
                <Nav
                  // brewdog={brewdog}
                  beers={beers}
                  getBeers={getBeers}
                  setURL={setURL}
                  setBeers={setBeers}
                />
              )}
              {!toggleNav && (
                
                <Link id="logo" to="/">
                  <img
                    className="image"
                    onClick={hideNav}
                    // src={brewdog}
                    alt=""
                  />
                </Link>
                
              )}
            </aside>
          </div>

          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Main
                    hideNav={hideNav}
                    beers={beers}
                    setBeers={setBeers}
                    searchValue={searchValue}
                    getSearchValue={getSearchValue}
                  />
                </div>
              }
            ></Route>

            <Route
              path="/moreInfo/:id"
              element={<MoreInfo beers={beers} />}
            ></Route>

            {/* <Route exact path="/moreInfo" element={< MoreInfo/>}></Route> */}
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
