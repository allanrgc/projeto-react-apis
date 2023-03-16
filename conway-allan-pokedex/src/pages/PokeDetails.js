import Header from "../components/Header/Header";
import { BodyContainer, MainContainer} from "../components/styled";
import CardDetails from "../components/Main/CardDetails";
import { useLocation, useParams } from "react-router-dom";

export function PokeDetails(props) {
  const { pokemons, pokeDetail, showDetails, removeFromPokedex } = props
  const location = useLocation()
  // const params = useParams()
  // // console.log(params)
  const pokemonInDetails = location.pathname.slice(9);
  const detailsPokemon = pokemons.find(
    (anyPokeDetail) => anyPokeDetail.data.name === pokemonInDetails
  );
  // console.log(params)
console.log(detailsPokemon)


  return (
    <BodyContainer>
      <Header />
      <p>teste</p>
      
      <MainContainer>
        
            <CardDetails
            pokemon={detailsPokemon}
            // pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.data.name}`}
            // removeFromPokedex={removeFromPokedex}
            showDetails={showDetails}
          />
          
      </MainContainer>
    </BodyContainer>
  );
}

// export default HomePage;