import Header from "../components/Header/Header";
import { BodyContainer, MainContainer} from "../components/styled";
import CardDetails from "../components/Main/CardDetails";
import { useParams } from "react-router-dom";

export function PokeDetails(props) {
  const { pokeDetail, showDetails, removeFromPokedex } = props

  // const params = useParams()
  // // console.log(params)

  // const detailsPokemon = pokeDetails.find(
  //   (anyPokeDetail) => anyPokeDetail.data.name === params.data.name
  // );
  // console.log(params)

  return (
    <BodyContainer>
      <Header />
      <MainContainer>
        {pokeDetail.filter((pokemon, key) => {
          console.log(pokemon)
          return (
            <CardDetails
            key={key}
            pokemon={pokemon}
            // pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.data.name}`}
            // removeFromPokedex={removeFromPokedex}
            showDetails={showDetails}
          />
          )
          
        })}
      </MainContainer>
    </BodyContainer>
  );
}

// export default HomePage;