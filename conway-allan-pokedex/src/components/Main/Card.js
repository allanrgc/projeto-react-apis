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
import pokeball from "../../assets/pokeball.png";
import { detailsButton } from '../../routes/coordinator';
import { getColors } from '../../utils/ReturnCardColor';
import { getTypes } from '../../utils/ReturnPokemonType';

  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProductSimple(props) {
    const { pokemon, pokemonUrl, addToPokedex, removeFromPokedex } = props;

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
        <Flex
          role={'group'}
          p={6}
          maxW={'440px'}
          minW={'430px'}
          minH={'230px'}
          w={'full'}
          bg={getColors(props.pokemon.data.types[0]?.type.name)}
          // bg={props.pokemon.data.types.map((type) => {
          //   // console.log(type.type.name[0].toUpperCase() + type.type.name.substring(1))
          //   console.log(type)
          //   return (
          //     getColors(type[0]?.type.name)
              
          //     // getColors(type.type.name[0].toUpperCase() + type.type.name.substring(1))
          //   )
          //   })}
        //     {console.log(type)}
            // console.log(type.type.name[0].toUpperCase() + type.type.name.substring(1))
        //     return (
                
        //       <Text fontWeight={800} fontSize={'xl'}>
        //        {type.type.name[0].toUpperCase() + type.type.name.substring(1)}
        //     </Text>
              
        //     )
        // }))}
          // bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'12px'}
          pos={'relative'}
          zIndex={1}>
          {/* <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'193px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            
          </Box> */}
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
              top={-12}
              left={220}
              zIndex={2}
              rounded={'lg'}
              height={193}
              width={193}
              objectFit={'cover'}
              src={props.pokemon.data.sprites.other["official-artwork"].front_default}
            />
            <Image 
            pos={'absolute'}
            top={0}
            left={172}
            zIndex={0}
            src={pokeball} alt="pokeball" />
            </Stack>
              <Flex pt={6} minW={'360px'} direction={'row'} justify={'space-between'} align={'center'}>
                <Button 
                cursor={'pointer'}
                border={'none'}
                bg={'transparent'}
                color={'white'}
                textDecoration={'underline'}
                // onClick={() => showDetails(pokemon)}
                onClick={() => detailsButton(navigate, props.pokemon.data.name)}
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
        </Flex>
      </Center>
    );
  }