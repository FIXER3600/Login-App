// src/theme.js
import { extendTheme } from '@chakra-ui/react';

// Definindo as cores personalizadas
const customTheme = extendTheme({
  colors: {
    gray: {
      500: '#718096',  // Definindo o valor de cinza
    },
    blue: {
      500: '#007AF5',  // Definindo o valor de azul
    },
    black: {
      500: '#000000',  // Definindo o valor de preto
    },
    white: {
      500: '#FFFFFF',  // Definindo o valor de branco
    },
  },
  fonts: {
	button: `'VisbyBold', sans-serif`,  // Para títulos
	body: `'Inter', sans-serif`,     // Para o corpo do texto
      },
});

export default customTheme;
