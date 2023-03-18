import Header from "../components/Header/Header";
import { BodyContainer, MainContainer} from "../components/styled";
import CardDetails from "../components/Main/CardDetails";
import { useLocation, useParams } from "react-router-dom";
import { Image, Heading } from '@chakra-ui/react';
import pokeball from "../../src/assets/pokeball.png";


export function PokeDetails(props) {
  const { pokedex, pokemons, pokeDetail, showDetails, removeFromPokedex } = props
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
      <Header pokedex={pokedex}/>
      <MainContainer>
        <Image 
          src={pokeball}
          pos={'absolute'}
          top={160}
          left={192}
          zIndex={0}
          height={909}
          width={909}
        />
        <Heading pos={'absolute'} top={176} left={8} fontSize={'4xl'} fontFamily={'body'} fontWeight={700} color={'white'}>
          Detalhes
        </Heading>
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