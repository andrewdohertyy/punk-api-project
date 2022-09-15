import React from "react";
import Header from "../../components/Header/Header"
import brewDog from '../../assets/brewdog.jpeg'
import {Link} from 'react-router-dom'

const Nav = ({setURL, beers, setBeers, getBeers }) => {

  const getAgeFilter = () => {
    setURL("https://api.punkapi.com/v2/beers?brewed_before=01-2010?page=1&per_page=30")
  };

  const getAlcoholFilter = () => {
    const highAlcoholFilter = beers.filter((beer) => beer.abv >= 6);
    setBeers(highAlcoholFilter);
  };

  const getAcidityFilter = () => {
    const highAcidityFilter = beers.filter((beer) => beer.ph < 4);
    setBeers(highAcidityFilter);
  };

  const clearFilters = (e) => {
    getBeers()
    setURL("https://api.punkapi.com/v2/beers?per_page=30")
  }

  const handleSelect = (e) => {
    if (e.target.value === "High Alcohol") {
      getAlcoholFilter();
    } else if (e.target.value === "High Acidity") {
      getAcidityFilter();
    } else if (e.target.value === "All") {
      clearFilters();
    } else if (e.target.value === "Classic Range") {
      getAgeFilter();
    }
  };


  const sortByName = () => {
  const nameAscending = [...beers].sort((a, b) => a.name > b.name ? 1 : -1,);
  setBeers(nameAscending);
  }

  const sortByEBC = () => {
  const ebcAscending = [...beers].sort((a, b) => a.ebc - b.ebc);
  setBeers(ebcAscending)
  }

  const sortByABV = () => {
  const abvAscending = [...beers].sort((a, b) => a.abv - b.abv);
  setBeers(abvAscending)
  }


  const handleSort = (e) => {
    if (e.target.value === "Name A-Z") {
      sortByName();
    } else if (e.target.value === "ABV Low-High") {
      sortByABV();
    } else if (e.target.value === "Sort:") {
      clearFilters();
    } else if (e.target.value === "EBC Low-High") {
      sortByEBC();
    }
  };



  return (
    <>
      <div>
        <Link to="/"><img className="image" src={brewDog} alt="" /></Link>
      </div>

      <header>
        <Header header={"PUNK API"} />
      </header>

      <div className="nav__container">

        <div className="dropdown" >
          <select
            onChange={handleSelect}
            className="dropdown__select"
            name="select"
          >
            <option>All</option>
            <option>High Acidity</option>
            <option>High Alcohol</option>
            <option>Classic Range</option>
          </select>
        </div>

        <div className="sort">
          <select onChange={handleSort} className="sort__select" name="Sort-By">
            <option>Sort:</option>
            <option>Name A-Z</option>
            <option>ABV Low-High</option>
            <option>EBC Low-High</option>
          </select>
        </div>

        <div className="dropdown__length">
          <h3>Filtered Items: {beers.length}</h3>
        </div>

      </div>
    </>
  );
};

export default Nav;
