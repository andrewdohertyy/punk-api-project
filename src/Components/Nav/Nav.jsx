import React from 'react'

const Nav = () => {
  return (
    <aside>
    <div className="dropdown">
      <select className='dropdown__select' name="select">
        <option value="none">Filter Options</option>
        <option>High Alcohol</option>
        <option>Classic Range</option>
        <option >High Acidity</option>
      </select>
    </div>
    </aside>
  )
}

export default Nav