import Header from "../components/Header/Header";
import { BodyContainer, MainContainer} from "../components/styled";
import Card from "../components/Main/Card"
import { Heading } from '@chakra-ui/react';

export function MyPokedex(props) {
  const { pokedex, removeFromPokedex } = props;
  return (
    <BodyContainer>
      <Header />
      <MainContainer>
        <Heading pos={'absolute'} top={176} left={8} fontSize={'4xl'} fontFamily={'body'} fontWeight={700} color={'white'}>
          Meus Pokemons
        </Heading>
        {pokedex.map((pokemon, key) => {
          return (
            <Card
            key={key}
            pokemon={pokemon}
            // pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
          )
          
        })}
      </MainContainer>
    </BodyContainer>
  );
}

// export default HomePage;