import ConfigRoutes from './routes/routes';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme'; 

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <ConfigRoutes/>
    </ChakraProvider>
  );
}

export default App;
