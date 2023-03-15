import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  Pokeball,
  CatchButton,
  PokemonImage,
  ButtonDetails
} from "./styled";
import pokeball from "../../assets/pokeball.png";
import { getTypes } from "../../utils/ReturnPokemonType";


const PokemonCard = (props) => {
    
  return (
    <Container >
      <div>
        <PokemonNumber>id</PokemonNumber>
        <PokemonName >{props.pokemon.data.name}</PokemonName>
        <TypesContainer>
          {/* {props.pokemon.type.map((type) => {
            return <PokemonType key={type} src={getTypes(type)} alt="" />;
          })} */}
        </TypesContainer>
        <ButtonDetails>Detalhes</ButtonDetails>
      </div>
      <div>
        <PokemonImage component="img" image={props.pokemon.data.sprites.front_default} alt="" height="200"/>
        <CatchButton>Capturar!</CatchButton>
      </div>
      {/* <Pokeball src={pokeball} alt="pokeball" /> */}
    </Container>
  );
};

export default PokemonCard;