import Header from "../components/Header/Header";
import { BodyContainer, MainContainer} from "../components/styled";
import PokemonCard from "../components/Main/PokemonCard";
// import pokemons from "../pokemon/pokemon.json";
import { getColors } from "../utils/ReturnCardColor";
import axios from "axios"
import React, { useEffect, useState } from "react";
import Card from "../components/Main/Card"
import CardDetails from "../components/Main/CardDetails";

export function PokeHome(props) {
  const {pokemons, addToPokedex, pokedex} = props
//     const [pokemons, setPokemons] = useState([]);
//     useEffect(() => {
//         getPokemons()
//     }, [])
// // console.log(pokemons)
//     const getPokemons = () => {
//       var endpoints = []
//       for (var i = 1; i < 31; i++){
//         endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//       }
//       var response = axios.all(endpoints.map((endpoint) => axios
//       .get(endpoint))).then((res) => setPokemons(res))
//     }
//     const [types, setTypes] = useState([]);
//     useEffect(() => {
//         getTypes()
//     }, [])
// console.log(types)
//     const getTypes = () => {
//       var endpoints = []
//       for (var i = 1; i < 20; i++){
//         endpoints.push(`https://pokeapi.co/api/v2/type/`)
//       }
//       var response = axios.all(endpoints.map((endpoint) => axios
//       .get(endpoint))).then((res) => setTypes(res))
//     }
const filteredPokelist = () =>
    pokemons.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.data.name === pokemonInPokedex.data.name
        )
    );
    // console.log(pokemons)
    
  return (
    <BodyContainer>
    
      <Header />
      
      <MainContainer>
        {filteredPokelist().map((pokemon, key, cardColor) => {
        return (
            <Card
                // cardColor={getColors(pokemon.type[0])}
                key={pokemon.data.id}
                pokemon={pokemon}
                addToPokedex={addToPokedex}
                // name={pokemon.data.name}
                // image={pokemon.data.sprites.front_default}
              />
        )
    })}
      
      </MainContainer>
    </BodyContainer>
  );
}

// export default HomePage;