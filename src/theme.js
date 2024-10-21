import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    gray: {
      500: '#718096',  
    },
    blue: {
      500: '#007AF5',  
    },
    black: {
      500: '#000000', 
    },
    white: {
      500: '#FFFFFF', 
    },
  },
  fonts: {
	button: `'VisbyBold', sans-serif`,  
	body: `'Inter', sans-serif`,    
      },
});

export default customTheme;
