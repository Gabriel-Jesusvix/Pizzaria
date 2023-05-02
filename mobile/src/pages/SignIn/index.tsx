

import React, { useState } from 'react';
import IconLogo from '../../assets/logo.png';

import { Container, Logo, Wrapper, Input, Button, Title } from './styles';
import { useAuth } from '../../contexts/Auth';
import { ActivityIndicator } from 'react-native';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { singIn, loadingAsyncStorage } = useAuth()


  async function handleLogin() {
    await singIn({ email, password})
  }

  
  return (
    <Container>
      <Logo source={IconLogo} />

      <Wrapper>
        <Input 
          placeholder='Write your email'
          placeholderTextColor="#F0F0F0"
          value={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
        />
        <Input 
          placeholder='Write your password'
          placeholderTextColor="#F0F0F0"
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Button onPress={handleLogin}>

          {loadingAsyncStorage ? (
            <ActivityIndicator  size={25} color="#1D1D2E"/>
          ) : (
            <Title>ACESSAR</Title>
          )}
        </Button>
      </Wrapper>
      
    </Container>
  );
}