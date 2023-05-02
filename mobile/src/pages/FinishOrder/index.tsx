import React from 'react';
import { Feather } from '@expo/vector-icons'
import { Alert, Container, Table, FinishOrderButton, Strong, } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../services/api';


interface OrderRouteParams {
  order_id: string;
  table:  number | string;
  name?: string;
} 


export function FinishOrder(){
  const route = useRoute();
  const { order_id, table, name } = route.params as OrderRouteParams;
  const { navigate } = useNavigation()


  async function handleFinish() {
    try {
      await api.put('/order/send', {
        order_id
      })

      navigate('Dashboard');
    } catch (error) {
      console.log('error ao finalizar', error)
    }
    

  }
  return (
    <Container>
      <Alert>Você deseja finalizar esse pedido?</Alert>
      <Table>Mesa {table}</Table>


      <FinishOrderButton onPress={handleFinish}>
        <Strong>Finalizar Pedido</Strong>
        <Feather 
          size={20}
          color="#1D1D2E"
          name='shopping-bag'
        />
      </FinishOrderButton>
    </Container>
  );
}