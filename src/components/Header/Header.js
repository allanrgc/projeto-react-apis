import { useLocation, useNavigate } from "react-router-dom";
import { homeButton, pokedexButton } from "../../routes/coordinator";
import {StyledHeader, StyledButton, StyledButtonIntern} from "../styled";
import logo from "../../assets/pokemonlogo.png";
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
  Grid,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons'

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToPokedex, removeFromPokedex, pokemons } = props
  // const irParaPerfil = (nome) => {
  //   navigate(`/profile/${nome}`)
  // }

  // const irParaHome = () => {
  //   navigate(`/`)
  // }
  // const detailsPokemon = pokemons.find(
  //   (anyPokeDetail) => anyPokeDetail.data.name === pokemonInDetails
  // );
  const pokemonInDetails = location.pathname.slice(9);
  // const param = /^\/details\/.+/.test(location.pathname)
  // console.log(pokemonInDetails)
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Flex align="center" justify="center">
            <StyledButton onClick={() => pokedexButton(navigate)}>
              Pokedex
            </StyledButton>
            <Image 
            w={'304px'}
            src={logo} />
          </Flex>
        );
      case "/pokedex":
        return (
          
          <Grid >
            <Image 
            w={'304px'}
            src={logo} 
            />
          
            <StyledButtonIntern onClick={() => homeButton(navigate)}>
              <ChevronLeftIcon/> Todos Pokemons
            </StyledButtonIntern>
          </Grid> 
          
        );
      case `/details/${pokemonInDetails}`:

        return (
        <>
        <Image 
            w={'304px'}
            src={logo} 
            />
        <StyledButtonIntern onClick={() => homeButton(navigate)}>
        <ChevronLeftIcon/> Todos Pokemons
        </StyledButtonIntern>
        {/* <Flex pt={6} minW={'390px'} direction={'row'} justify={'space-between'} align={'center'}>
                
                {location.pathname !== "/" ? (
                
                <Button 
                cursor={'pointer'}
                // border={'1px solid black'}
                fontFamily={'poppins'} 
                fontWeight={400} 
                fontSize={'xl'}
                onClick={() => addToPokedex(pokemon)}
                >Capturar!
                </Button>
                ) : (
                  <Button 
                  bg='#FF6262'
                  color='white'
                  w='144px'
                fontFamily={'poppins'} 
                fontWeight={400} 
                fontSize={'xl'}
                onClick={() => removeFromPokedex(pokemon)}
                >Excluir
                </Button>
                )}
              </Flex> */}

      </>
        );
      default:
        return (
          <>
            <StyledButton onClick={() => homeButton(navigate)}>
              Voltar para página inicial
            </StyledButton>
            <span>Página inexistente</span>
          </>
        );
    }
  };

  return <StyledHeader>{renderHeader()}</StyledHeader>;
}

//   return (
//     <StyledHeader>
//       <div>
      
//       </div>
//       <StyledHomeButton onClick={() => homeButton(navigate)}><img src={logo} height="100%" /></StyledHomeButton>
//       <StyledButton onClick={() => pokedexButton(navigate)}>Pokedex</StyledButton>
//     </StyledHeader>
    
//   );
// }

export default Header;