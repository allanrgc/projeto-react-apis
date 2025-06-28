import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BodyContainer } from "./components/styled"
import Header from "./components/Header/Header";
import { Router } from "./routes/Router";


function App() {
  return (
    <ChakraProvider>
    
      <Router />
    
    </ChakraProvider>
  );
}

export default App;
