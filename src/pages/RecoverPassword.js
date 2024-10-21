// src/pages/ForgotPassword.js
import React from 'react';
import { Box, Heading, Image, Stack, Flex,Input,InputRightElement,InputGroup,UnorderedList,ListItem, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import '../index.css'
import  GoogleLogoHeader from '../assets/Google.svg'
import IconEye from '../assets/Icons/eye.png'
const RecoverPassword = () => {
  return (
<Box h={'100vh'} fontFamily={'Inter'}>	 
	<Heading 
	  boxShadow={'sm'}
	  py={'12px'}
	  px={'30px'}
	  mb={4}>
		<Image src={GoogleLogoHeader}/>
	  </Heading>
	  <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}
	  h={'100vh'}
	>
		<Center>
		<Stack 
		
		>

		
      <Heading as="h2" size="lg" mb={8} >Redefinir Senha</Heading>
      <InputGroup size='sm'>
      <Input variant={'outline'}  placeholder="Nova senha" bg="white" borderRadius={'16px'} size={'lg'}/>

    <InputRightElement>
   
      <Image src={IconEye} mt={'15px'} mr={'15px'}/>
     
    </InputRightElement>
      </InputGroup>
      <UnorderedList color={'gray.500'} >
  <ListItem>Mínimo 6 caracteres</ListItem>
  <ListItem>Mínimo uma letra [a-z ou A-Z]</ListItem>
  <ListItem>Mínimo um número [0-9]</ListItem>
  <ListItem>Mínimo um caracter especial [!@#$%^&amp;()_-+={}[]|:;&lt;&gt;?/~]</ListItem>
  </UnorderedList>
      <InputGroup size='sm' mt={6} mb={6}>
    <Input variant={'outline'} placeholder="Confirme a nova senha" bg="white" borderRadius={'16px'}  size={'lg'}/>

    <InputRightElement>
   
      <Image src={IconEye} mt={'15px'} mr={'15px'}/>
     
    </InputRightElement>
      </InputGroup>
      <CustomButton color={'white.500'} text={'Atualizar senha'} backgroundColor={'blue.500'} width={'422px'}/>
	<Link href='/login' >
              <CustomButton color={'blue.500'} isOutline={true} text={'Cancelar'} width={'422px'} />
	</Link>
	
      </Stack>
      </Center>
      </Flex>
    </Box>
  );
};

export default RecoverPassword;
