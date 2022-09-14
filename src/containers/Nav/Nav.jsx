import React from "react";
import Header from "../../components/Header/Header"
import brewDog from '../../assets/brewdog.jpeg'

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

  return (
    <>
      <div>
        <img onClick={getAgeFilter} className="image" src={brewDog} alt="" />
      </div>
      <header>
        <Header header={"PUNK API"} />
      </header>
      <div className="dropdown">
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
        <div className="dropdown__length">
          <h3>Filtered Items: {beers.length}</h3>
        </div>
      </div>
    </>
  );
};

export default Nav;
