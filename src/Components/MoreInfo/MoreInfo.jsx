import React from 'react'
import { useParams } from 'react-router-dom';



const MoreInfo = ({beers}) => {
    console.log(beers);

const {beerID} = useParams();

const clickedBeers = beers.filter((beer) => beer.id === beerID)
console.log(beerID);
console.log(clickedBeers[0]);
  return (
    
    <div>
       
    </div>
    
  )
}

export default MoreInfo
