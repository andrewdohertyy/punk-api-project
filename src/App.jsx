import Main from "./Components/Main/Main"
import './App.scss';
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import { useState } from "react";

function App() {

const [beers, setBeers] = useState([]);

const getBeers = async () => {
  const url = "https://api.punkapi.com/v2/beers";
  const res = await fetch(url);
  const data = await res.json();
  setBeers(data)
} 
getBeers();
console.log(beers);


const highAlcoholFilter = beers.filter((beer)  => beer.abv >= 6);
const highAcidityFilter = beers.filter((beer)  => beer.ph < 4
 );



  return (
    <div className="container">
      <header className="container__header">
        <h1>PUNK API</h1>
      </header>

        <div>
        <Nav />
        </div>

        <div>
        <Search />
        </div>


        <div>
          <Main beers={beers}/>
        </div>

        <div>
          <footer></footer>
        </div>
    </div>
   
  );
}

export default App;
