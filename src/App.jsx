import Main from "./Components/Main/Main"
import './App.scss';
import beerData from "./Data/beer";
import Nav from "./Components/Nav/Nav";

function App() {

  //function for getting the information about each individual beer
  const beersJSX = beerData.map((beer) => {
    return (
      <Main image={beer.image_url} name={beer.name} info={beer.description} percentage={beer.abv}/>
    )
  })




  



console.log("i work");

  return (
    <div className="container">
      <header>
        <h1>PUNK API PROJECT</h1>
      </header>

        <div>
        <Nav />
        </div>


        <div className='container__grid'>
          {beersJSX}
        </div>

        <div>
          <footer></footer>
        </div>
    </div>
   
  );
}

export default App;
