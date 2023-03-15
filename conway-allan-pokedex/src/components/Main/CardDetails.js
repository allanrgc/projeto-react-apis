import {
    Box,
    Flex,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bigpokeball from "../../assets/bigpokeball.png";
import { getColors } from '../../utils/ReturnCardColor';
import { getTypes } from '../../utils/ReturnPokemonType';

  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function CardDetails(props) {
    const { pokemon, addToPokedex, removeFromPokedex } = props;

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  // const [pokemon, setPokemon] = useState({});
  // useEffect(() => {
  //   fetchPokemon();
  // }, []);

  // const fetchPokemon = async () => {
  //   try {
  //     const response = await axios.get(pokemonUrl);
  //     setPokemon(response.data);
  //   } catch (error) {
  //     console.log("Erro ao buscar lista de pokemons");
  //     console.log(error);
  //   }
  // };

    // console.log(props.pokemon.data.sprites.other["official-artwork"].front_default)
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'1392px'}
          minW={'1376px'}
          minH={'672px'}
          w={'full'}
          bg={getColors(props.pokemon.data.types[0]?.type.name)}
          
          boxShadow={'2xl'}
          rounded={'12px'}
          pos={'relative'}
          zIndex={1}>
          <Box
            width={282}
            height={282}
            bg={'white'}
            left={'44px'}
            top={'26px'}
            borderRadius={'8px'}
            >
            
          </Box>
          <Box
            width={282}
            height={282}
            bg={'white'}
            left={'44px'}
            bottom={'26px'}
            borderRadius={'8px'}
            >
            
          </Box>
          <Stack  align={'left'}>
            <Text textAlign={'left'} 
            color={'white'} 
            fontFamily={'Inter'} 
            fontSize={'16px'} 
            textTransform={'uppercase'}>
              #0{props.pokemon.data.id}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600} color={'white'}>
              {props.pokemon.data.name[0].toUpperCase() + props.pokemon.data.name.substring(1)}
            </Heading>
            <Stack direction={'row'} wrap={'wrap'} justify={'left'} align={'center'} maxH={360} maxW={340}>
                {props.pokemon.data.types.map((type) => {
                    // {console.log(type)}
                    return (
                      <Image key={type} src={getTypes(type.type.name)} alt="" />
                    //   <Text fontWeight={800} fontSize={'xl'}>
                    //    {type.type.name[0].toUpperCase() + type.type.name.substring(1)}
                    // </Text>
                      
                    )
                })}
                
              {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text> */}
              <Image
              pos={'absolute'}
              bottom={530}
              right={30}
              zIndex={2}
              rounded={'lg'}
              height={270}
              width={270}
              objectFit={'cover'}
              src={props.pokemon.data.sprites.other["official-artwork"].front_default}
            />
            <Image 
            pos={'absolute'}
            top={0}
            width={672}
            right={0}
            zIndex={0}
            src={bigpokeball} alt="pokeball" />
            </Stack>
              <Flex pt={6} minW={'360px'} direction={'row'} justify={'space-between'} align={'center'}>
                <Button 
                cursor={'pointer'}
                border={'none'}
                bg={'transparent'}
                color={'white'}
                textDecoration={'underline'}
                // onClick={() => showDetails(pokemon)}
                // onClick={() => detailsButton(navigate, props.pokemon.data.name)}
                >Detalhes</Button>
                {location.pathname === "/" ? (
                
                <Button 
                cursor={'pointer'}
                border={'1px solid black'}
                fontFamily={'poppins'} 
                fontWeight={700} 
                fontSize={'xl'}
                onClick={() => addToPokedex(pokemon)}
                >Capturar
                </Button>
                ) : (
                  <Button 
                fontFamily={'poppins'} 
                fontWeight={700} 
                fontSize={'xl'}
                onClick={() => removeFromPokedex(pokemon)}
                >Remover da pokedex
                </Button>
                )}
              </Flex>
            </Stack>
          {/* </Stack> */}
        </Box>
      </Center>
    );
  }