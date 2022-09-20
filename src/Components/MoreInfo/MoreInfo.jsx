import React from "react";
import { useParams } from "react-router-dom";
import "./MoreInfo.scss"

const MoreInfo = ({ beers }) => {

  //set param to make link
  const { id } = useParams();
  //new variable to find the clicked beer
  const clickedBeers = beers.filter((beer) => beer.id == id);
 

  return (
    <>
      <h1 className="title">MORE INFO</h1>
  
      <div className="moreinfo">
        <img className="moreinfo__image" src={clickedBeers[0].image_url} alt="" />
        <h1 className="moreinfo__name">{clickedBeers[0].name}</h1>
        
        <p className="moreinfo__description">{clickedBeers[0].description}</p>
        <p className="moreinfo__food"><b>Goes well with: </b> <br />{clickedBeers[0].food_pairing.join(", ")}</p>
        <h3 className="moreinfo__brewed">First brewed: {clickedBeers[0].first_brewed}</h3>
        <h3 className="moreinfo__abv">{clickedBeers[0].abv}%</h3>
        <button className="moreinfo__button">Add To Basket</button>
      </div>
      <div className="home">
        <p className="home__text">Click the logo at the top to go home!</p>
      </div>
    </>
  );
};

export default MoreInfo;
