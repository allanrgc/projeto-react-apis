import Header from "../components/Header/Header";
import { BodyContainer, MainContainer} from "../components/styled";
import Card from "../components/Main/Card"

export function MyPokedex(props) {
  const { pokedex, removeFromPokedex } = props;
  return (
    <BodyContainer>
      <Header />
      <MainContainer>
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