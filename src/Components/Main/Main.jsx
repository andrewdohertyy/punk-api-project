import React from 'react'
import BeerCard from '../BeerCard/BeerCard'


const Main = ({ beers }) => {


  return (
    <div className='container__grid'>
      {beers.map((beer) => (
        <BeerCard
          key={beer.id}
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
          abv={beer.abv}
        />
      ))}
    </div>
  );
};

export default Main