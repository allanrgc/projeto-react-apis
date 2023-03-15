import { useLocation, useNavigate } from "react-router-dom";
import { homeButton, pokedexButton } from "../../routes/coordinator";
import {StyledHeader, StyledButton, StyledHomeButton} from "../styled";
import logo from "../../assets/pokemon-logo.png";
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

function Header() {
  const location = useLocation();
  const navigate = useNavigate()
  // const irParaPerfil = (nome) => {
  //   navigate(`/profile/${nome}`)
  // }

  // const irParaHome = () => {
  //   navigate(`/`)
  // }
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <StyledButton onClick={() => pokedexButton(navigate)}>
              Ver pokedex
            </StyledButton>
            <span>Lista de pokemons</span>
          </>
        );
      case "/pokedex":
        return (
          <>
            <StyledButton onClick={() => homeButton(navigate)}>
              Ver lista de pokemons
            </StyledButton>
            <span>Pokedex</span>
          </>
        );
      default:
        return (
          <>
            <StyledHomeButton onClick={() => homeButton(navigate)}>
              Voltar para página inicial
            </StyledHomeButton>
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