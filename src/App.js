// src/App.js
import { Box, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Bem-vindo ao Chakra UI!
      </Heading>
      <Text fontSize="lg">
        Este é um projeto React básico usando Chakra UI.
      </Text>
    </Box>
  );
}

export default App;
