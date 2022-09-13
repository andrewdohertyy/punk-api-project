import React from "react";

const Nav = ({
  getAlcoholFilter,
  getAcidityFilter,
  getAgeFilter,
  getBeers,
}) => {
  
  const handleSelect = (e) => {
    if (e.target.value === "High Alcohol") {
      getAlcoholFilter();
    } else if (e.target.value === "High Acidity") {
      getAcidityFilter();
    } else if (e.target.value === "Filter Options") {
      getBeers();
    } else if (e.target.value === "Classic Range") {
      getAgeFilter();
    }
  };

  return (
    <aside>
      <div className="dropdown">
        <select
          onChange={handleSelect}
          className="dropdown__select"
          name="select"
        >
          <option>Filter Options</option>
          <option>High Alcohol</option>
          <option>Classic Range</option>
          <option>High Acidity</option>
        </select>
      </div>
      <div className="sort">
        <select
          className="sort__select"
          name="Sort-By"
        >
          <option>Sort:</option>
          <option>Strongest</option>
          <option>Weakness </option>
          <option>Another Option</option>
        </select>
      </div>
    </aside>
  );
};

export default Nav;
