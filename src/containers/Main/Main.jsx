import React from 'react';
import BeerCard from '../../components/BeerCard/BeerCard';
import Search from '../../components/Search/Search';


const Main = ({ beers, setBeers, searchValue, getSearchValue, hideNav }) => {


  const searchBeers = (beers, searchValue) => {
    return beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const beerToJSX = (beers) => {
    return searchBeers(beers, searchValue).map((beer, index) => {
      return (
        <div key={index}>
          
          <BeerCard
            hideNav={hideNav}
            id={beer.id}
            beers={beers}
            image={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            abv={beer.abv}
          />
        </div>
      );
    });
  };



  return (
    <>
      <div>
        <Search beers={beers} setBeers={setBeers} getSearchValue={getSearchValue}/>

      </div>
      <div className="container__grid">{beerToJSX(beers)}</div>
    </>
  );
};
export default Main