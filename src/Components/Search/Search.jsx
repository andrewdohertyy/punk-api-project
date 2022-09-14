import React from 'react'


const Search = ({getSearchValue}) => {
  return (
    <div className="search">
        <input onChange={getSearchValue} className="search__input"  type="text" placeholder='Search here...'/>
    </div>
  )
}

export default Search