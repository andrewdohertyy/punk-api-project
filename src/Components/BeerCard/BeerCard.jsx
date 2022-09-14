import React from 'react'

const BeerCard = ({ image, name, tagline, abv }) => {

  return (
    <div className="beer">
      <div>
        <img className="beer__image" src={image} alt={name} />
        <h3 className="beer__title">
          <b>{name.toUpperCase()}</b>
        </h3>
        <p className="beer__info">{tagline}</p>
        <h4 className="beer__percentage">ABV(%) <br />{abv}</h4>
        <button className="beer__moreinfo">More Info</button>
      </div>
    </div>
  );
};

export default BeerCard