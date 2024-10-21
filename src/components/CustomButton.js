// src/CustomButton.js
import React from 'react';
import { Button, Image } from '@chakra-ui/react';

const CustomButton = ({ color, backgroundColor, text, icon, isOutline = false,width,type }) => {
  return (
    <Button
      color={color}
      bg={isOutline ? 'white' : backgroundColor} // Se isOutline for true, o fundo será transparente
      _hover={{ 
        bg: isOutline ? 'transparent' : `${backgroundColor}.dark`, 
        opacity: 0.8 
      }} // Efeito de hover com a cor de fundo se não for outline
      leftIcon={icon ? <Image src={icon}/> : null} // Adiciona o ícone se presente
      variant={isOutline ? 'outline' : 'solid'} // Define o estilo do botão como outline ou solid
      colorScheme={color}
      borderRadius={'16px'}
      h={'48px'}
      w={width}
      type={type}
     
    >
      {text}
    </Button>
  );
};

export default CustomButton;

