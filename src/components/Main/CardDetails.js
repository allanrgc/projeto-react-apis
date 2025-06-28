import {
    Box,
    Grid,
    Flex,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Progress,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bigpokeball from "../../assets/bigpokeball.png";
import { getColors, getStats } from '../../utils/ReturnCardColor';
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

    // console.log(props.pokemon.data.moves)
    return (
      <Center py={12} >
        <Grid
          role={'group'}
          // p={6}
          maxW={'1392px'}
          minW={'1376px'}
          height={'666px'}
          // w={'full'}
          bg={getColors(props.pokemon.data.types[0]?.type.name)}
          // gap={2}
          autoFlow="column dense"
          boxShadow={'2xl'}
          rounded={'12px'}
          pos={'relative'}
          zIndex={1}>
          <Grid >
            <Box
            width={282}
            height={282}
            bg={'white'}
            pos={'relative'}
            left={'44px'}
            top={'27px'}
            borderRadius={'8px'}
              >
              <Image 
              pos={'absolute'}
              top={'80px'}
              left={'80px'}
              height={24}
              width={24}
                src={props.pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default}
              />
            </Box>
            <Box
              width={282}
              height={282}
              bg={'white'}
              pos={'relative'}
              left={'44px'}
              top={'21px'}
              // bottom={'26px'}
              borderRadius={'8px'}
            >
              <Image 
                pos={'absolute'}
                top={'80px'}
                left={'80px'}
                height={24}
                width={24}
                src={props.pokemon.data.sprites.versions["generation-v"]["black-white"].animated.back_default}
              />
            </Box>
          </Grid>
          

          <Box
            width={282}
            height={613}
            bg={'white'}
            pos={'relative'}
            left={'18px'}
            top={'27px'}
            borderRadius={'12px'}
            >
            <Text
            textAlign={'left'} 
            color={'black'} 
            fontFamily={'body'} 
            fontWeight={700}
            fontSize={'24px'} 
            // textTransform={'uppercase'}
            pos={'relative'} 
            left={'32px'} 
            top={'24px'}
            gridRow='row'
            >
              Base status
            </Text>
              <Stack w={'80%'} spacing={5}>
              {/* {props.pokemon.data.stats.map((value) => {
                    {console.log(value.base_stat)}
                    // return (
                    //   <Stack>
                    //     <Text>{value.stat.name}</Text>
                    //     if (51  50) {
                    //       <Progress value={value.base_stat} />
                    //       } else {
                    //       <Progress value={value.base_stat} />
                    //       }
                        
                    //   </Stack>
                    */}
                {props.pokemon.data.stats.map(value => {
                return value.base_stat < 50 ? 
                <Flex
                  align="center" 
                  justify="end"
                  pos={'relative'} 
                  left={'8px'} 
                  top={'24px'}
                >
                  <Text pr={'16px'} fontSize={'12px'}>{getStats(value.stat.name)}: {value.base_stat}</Text>
                  <Progress w='65%' borderRadius={4} colorScheme='orange' value={value.base_stat} />
                  
                </Flex>
                  
                 : 
                 <Flex
                  align="center" 
                  justify="end"
                  pos={'relative'} 
                  left={'8px'} 
                  top={'24px'}  
                >
                  <Text pr={'16px'} fontSize={'12px'}>{getStats(value.stat.name)}: {value.base_stat}</Text>
                  <Progress w='65%' borderRadius={4} colorScheme='yellow' value={value.base_stat} />
                  
                  </Flex>
                  
                
                }
                    )
                }
              </Stack>
              
          </Box>
          <Stack align={'left'}>
            <Text 
            pos={'relative'} 
            top={'24px'}
            left={'64px'} 
            fontSize={'1xl'} 
            fontFamily={'body'} 
            fontWeight={600} 
            color={'white'} >
              #0{props.pokemon.data.id}
            </Text>
            <Heading pos={'relative'} left={'64px'} fontSize={'5xl'} fontFamily={'body'} fontWeight={600} color={'white'}>
              {props.pokemon.data.name[0].toUpperCase() + props.pokemon.data.name.substring(1)}
            </Heading>
            <Stack direction={'row'} wrap={'wrap'} justify={'left'} align={'center'} maxH={360} maxW={340}>
                {props.pokemon.data.types.map((type) => {
                    // {console.log(type)}
                    return (
                      <Image pos={'relative'} left={'64px'} key={type} src={getTypes(type.type.name)} alt="" />
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
            width={784}
            right={0}
            zIndex={0}
            src={bigpokeball} alt="pokeball" />
            </Stack>
            <Box
              width={292}
              height={453}
              bg={'white'}
              pos={'relative'}
              left={'64px'}
              top={'48px'}
              borderRadius={'8px'}
            >
              <Text
                textAlign={'left'} 
                color={'black'} 
                fontFamily={'body'} 
                fontWeight={700}
                fontSize={'24px'} 
                // textTransform={'uppercase'}
                pos={'relative'} 
                left={'32px'} 
                top={'24px'}
                gridRow='row'
              >
                Moves
              </Text>
              {/* {props.pokemon.data.moves.map((value) => {
                    {console.log(props.pokemon.data.moves[0].move.name)}
                    return ( */}
                      <Stack>
                        <Text 
                        fontWeight={500}
                        pos={'relative'} 
                        left={'32px'} 
                        top={'24px'}
                        bg={'gray.100'}
                        w='max'
                        m={1}
                        p={1}
                        borderRadius={8}
                        >
                          {props.pokemon.data.moves[0].move.name[0].toUpperCase() + props.pokemon.data.moves[0].move.name.substring(1)}
                        </Text>
                        <Text 
                        fontWeight={500}
                        pos={'relative'} 
                        left={'32px'} 
                        top={'24px'}
                        bg={'gray.100'}
                        w='max'
                        m={1}
                        p={1}
                        borderRadius={8}
                        >
                          {props.pokemon.data.moves[1].move.name[0].toUpperCase() + props.pokemon.data.moves[1].move.name.substring(1)}
                        </Text>
                        <Text 
                        fontWeight={500}
                        pos={'relative'} 
                        left={'32px'} 
                        top={'24px'}
                        bg={'gray.100'}
                        w='max'
                        mt={1}
                        p={2}
                        borderRadius={8}
                        >
                          {/* {props.pokemon.data.moves[2].move.name} */}
                          {props.pokemon.data.moves[2].move.name[0].toUpperCase() + props.pokemon.data.moves[2].move.name.substring(1)}
                        </Text>
                        <Text 
                        fontWeight={500}
                        pos={'relative'} 
                        left={'32px'} 
                        top={'24px'}
                        bg={'gray.100'}
                        w='max'
                        m={1}
                        p={1}
                        borderRadius={8}
                        >
                          {props.pokemon.data.moves[4].move.name[0].toUpperCase() + props.pokemon.data.moves[4].move.name.substring(1)}
                        </Text>
                      </Stack>
                      
                
                    {/* )
              }
            )} */}

            </Box>
          
            </Stack>
            <Box
            width={292}
            height={0}
            bg={'white'}
            pos={'relative'}
            left={'0px'}
            top={'150x'}
            borderRadius={'8px'}
            >
            
          </Box>
          {/* </Stack> */}
        </Grid>
      </Center>
    );
  }