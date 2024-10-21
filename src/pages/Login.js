import React, { useState } from 'react';
import { Box,Center, Input, Stack, Image, Link,Grid, FormControl,useToast,Text } from '@chakra-ui/react';
import GoogleLogo from '../assets/Google.png'
import CustomButton from '../components/CustomButton';
import IconPadlock from '../assets/Icons/lock.png'
import '../index.css'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const toast = useToast();
	const validateEmail = (email) => {
		const emailRegex = /^(?=.*\d)(?=.*@)(?=.*\.com)/; // Deve ter um número, um '@' e terminar com '.com'
		return emailRegex.test(email);
	      };
	    
	      const validatePassword = (password) => {
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/; // Deve ter pelo menos uma letra, um número, um caracter especial e ter mais de 5 caracteres
		return passwordRegex.test(password);
	      };
	    
	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		if (!email || !password) {
		  setError('Por favor, preencha todos os campos.');
		  return;
		}
		 if (!validateEmail(email)) {
			setError('Email inválido. Deve conter um número, um "@" e terminar com ".com".');
			return;
		      }
		      if (!validatePassword(password)) {
			setError('A senha deve ter pelo menos 6 caracteres, uma letra, um número e um caracter especial.');
			return;
		      }

		toast({
		  title: 'Login bem-sucedido!',
		  description: "Você está agora logado.",
		  status: 'success',
		  duration: 3000,
		  isClosable: true,
		});

		setEmail('');
		setPassword('');
	      };
	    
  return (
	<Grid templateColumns="1fr 1fr" height="100vh" >
      <Center height="100%">
        <Box 
          width="100%" 
          maxW="md" 
          p={6} 
        >
          <Center mb={'50px'}>
            <Image 
              src={GoogleLogo} 
              alt="Google Logo" 
              boxSize="50px"
            />
          </Center>
	  <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!error}>
          <Stack spacing={8} mb={'48px'}>
		
            <Input placeholder="Usuário" value={email}  onChange={(e) => setEmail(e.target.value)} bg="white" borderRadius={'12px'}/>

            <Input placeholder="Senha" value={password}  onChange={(e) => setPassword(e.target.value)} type="password" bg="white" borderRadius={'12px'}/>
	    {error && <Text color="red.500">{error}</Text>}

          
           
          </Stack>
	  <Stack spacing={2}>
	  <CustomButton type={'submit'} color={'white.500'} text={'Autenticar'} backgroundColor={'blue.500'} icon={IconPadlock} width={'414px'}/>


          
<Link href='/recoverPassword'>
<CustomButton color={'blue.500'} isOutline={true} text={'Esqueci minha senha'} width={'414px'}/>
</Link>

	  </Stack>
	  </FormControl>
	  </form>
        </Box>
      </Center>
      {/* Lado Direito: Box Azul */}
      <Box bg="blue.500"></Box>
    </Grid>
  );
};

export default Login;
