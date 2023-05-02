

import React, { useState } from 'react';
import { Container,H1,Input, Title, Button } from './styles';
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api';
import { useAuth } from '../../contexts/Auth';


export function Dashboard(){
  const { navigate } = useNavigation()
  const [table, setTable] = useState('');
  const { signOut } = useAuth();


  async function openOrder() {
    if(!table) {
      alert('Para abrir um pedido é necessário o número da mesa');
    }
    const { data } = await api.post('/order', {
      table: Number(table),
      name: '',
    })

    navigate('Order', {
      table,
      order_id: data.id
    })

    setTable('');
  }

  
  return (
    <Container>
      <H1>Novo pedido</H1>
      
      <Input 
          placeholder='Numero da mesa'
          placeholderTextColor="#F0F0F0"
          keyboardType='numeric'
          value={table}
          onChangeText={(table) => setTable(table)}
      />
        <Button onPress={openOrder}>
          <Title>ABRIR MESA</Title>
        </Button>

        <Button onPress={signOut}>
          <Title>SAIR</Title>
        </Button>
        
    </Container>
  );
}