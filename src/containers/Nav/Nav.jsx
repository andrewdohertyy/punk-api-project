import React from "react";
import Header from "../../components/Header/Header"
import brewDog from '../../assets/brewdog.jpeg'

const Nav = ({
  getAlcoholFilter,
  getAcidityFilter,
  getAgeFilter,
  clearFilters
}) => {


  const handleSelect = (e) => {
    if (e.target.value === "High Alcohol") {
      getAlcoholFilter();
    } else if (e.target.value === "High Acidity") {
      getAcidityFilter();
    } else if (e.target.value === "All") {
      clearFilters()
    } else if (e.target.value === "Classic Range") {
      getAgeFilter();
    }
  };

  // const handleSort = (e) => {

  // }

  return (
    <>
        <div>
          <img className='image' src={brewDog} alt="" />
        </div>
      <header>
        <Header header={"PUNK API"} />
      </header>
      <aside>
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
        </div>
        <div className="sort">
          <select className="sort__select" name="Sort-By">
            <option>Sort:</option>
            <option>Strongest</option>
            <option>Weakness </option>
            <option>Another Option</option>
          </select>
        </div>
      </aside>
    </>
  );
};

export default Nav;
