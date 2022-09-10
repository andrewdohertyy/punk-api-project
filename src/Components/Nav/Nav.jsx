import React from 'react'

const Nav = () => {
  return (
    <aside>
    <div className="dropdown">
        <input type="search" placeholder='search here...' src='./Data/search.png'/>
        <button>High Alcohol</button>
        <button>Classic Range</button>
        <button>High Acidity</button>
    </div>
    </aside>
  )
}

export default Nav