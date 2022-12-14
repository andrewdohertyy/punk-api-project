import React from "react";
import { Link } from "react-router-dom";

const BeerCard = ({ image, name, tagline, abv, id, hideNav }) => {
  return (
    <div className="beer">
      <div>
        <img className="beer__image grow" src={image} alt={name} />
        <h3 className="beer__title">
          <b>{name.toUpperCase()}</b>
        </h3>
        <p className="beer__info">{tagline}</p>
        <h4 className="beer__percentage">
          ABV(%) <br />
          {abv}
        </h4>
        <Link to={`/moreInfo/${id}`}>
          <button onClick={hideNav} className="beer__moreinfo">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BeerCard;
