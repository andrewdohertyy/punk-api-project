import React from 'react'
import beerImg from '../../Assets/beer.png'

const Header = ({header}) => {
  return (
    <div className='header'>
      <img className="header__image" src={beerImg} alt="" />
        <h1 className="header__title">{header}</h1>
        <p className="header__text display">The biggest range of the latest craft beer releases from BrewDog and breweries we know and love from around the world. All ready and waiting to be discovered.</p>
    </div>
  )
}

export default Header