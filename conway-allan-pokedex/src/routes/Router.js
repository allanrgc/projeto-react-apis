import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokeHome } from "../pages/PokeHome";
import { MyPokedex } from "../pages/MyPokedex";
import { PokeDetails } from "../pages/PokeDetails";
import { Error } from "../pages/Error";
import { useEffect, useState } from "react";
import axios from "axios";

export const Router = (props) => {
    const [pokedex, setPokedex] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokeDetail, setPokeDetail] = useState([]);
    const pokemonName = props

    useEffect(() => {
        getPokemons()
    }, [])
// console.log(pokemons)
    const getPokemons = async () => {
      const endpoints = []
      for ( let i = 1; i < 31; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      const response = await axios.all(endpoints.map((endpoint) => axios
      .get(endpoint))).then((res) => setPokemons(res))
    }
    // const getPokemons = async () => {
      
    //   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=30`);
    //   const pokemonsUrlArray = response.data.results;
    //   const promissesPokemonData = await axios.all(
    //     pokemonsUrlArray.map((pokemon) => axios.get(pokemon.url))
    //   );
    //   setPokemons(promissesPokemonData)
    //   return promissesPokemonData;
    // };
    

    const addToPokedex = (pokemonToAdd) => {
      // console.log(pokemonToAdd)
        const isAlreadyOnPokedex = pokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.data.name === pokemonToAdd.data.name
          
        );
        
    
        if (!isAlreadyOnPokedex) {
          const newPokedex = [...pokedex, pokemonToAdd];
          setPokedex(newPokedex);
        }
      };
      const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
          (pokemonInPokedex) => pokemonInPokedex.data.name !== pokemonToRemove.data.name
        );
    
        setPokedex(newPokedex);
      };
      // console.log(pokedex)

      const showDetails = (pokemonToDetail) => {
        // console.log(pokemonToDetail)
          const isAlreadyOnDetail = pokeDetail.find(
            (anyPokeDetail) => anyPokeDetail.data.name === pokemonToDetail.data.name
            
          );
          if (!isAlreadyOnDetail) {
            const newPokeDetail = [...pokeDetail, pokemonToDetail];
            setPokeDetail(newPokeDetail);
          }
        };
        const closePokeDetail = (pokemonToClose) => {
          const newPokeDetail = pokeDetail.filter(
            (anyPokeDetail) => anyPokeDetail.data.name !== pokemonToClose.data.name
          );
      
          setPokeDetail(newPokeDetail);
        };

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <PokeHome
                            pokemons={pokemons}
                            addToPokedex={addToPokedex}
                            pokedex={pokedex}
                            showDetails={showDetails}
                            pokeDetail={pokeDetail}
                        />}/>
                <Route 
                    path="/pokedex" 
                    element={
                        <MyPokedex
                            removeFromPokedex={removeFromPokedex}
                            pokedex={pokedex}
                        />} 
                />
                <Route 
                  path={"/details/:name"}
                  element={
                  <PokeDetails
                    pokemons={pokemons}
                    pokeDetail={pokeDetail}
                    showDetails={showDetails}
                    closePokeDetail={closePokeDetail}
                  />} 
                />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}