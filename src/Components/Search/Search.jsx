//import { useState } from "react";

import React from 'react'

const Search = ({setQuery}) => {





  return (
    <div className="search">
        <input onChange={e => setQuery(e.target.value)} className="search__input"  type="search" placeholder='Search here...' src='./Data/search.png'/>
    </div>
  )
}

export default Search