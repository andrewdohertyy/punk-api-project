import { useState } from "react";

import React from 'react'

const Search = ({beers, setBeers}) => {
  
  const [query, setQuery] = useState("");

const handleSearch = (e) => {
  setQuery(e.target.value);
  console.log(query);
  const searchFilter = beers.filter((beer) => beer.name.toLowerCase().includes(query))
  setBeers(searchFilter);
}



  return (
    <div className="search">
        <input onKeyPress={handleSearch} className="search__input"  type="text" placeholder='Search here...'/>
    </div>
  )
}

export default Search