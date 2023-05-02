import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../pages/Dashboard';
import { Order } from '../pages/Order';
import { FinishOrder } from '../pages/FinishOrder';


const Stack = createNativeStackNavigator();


export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Dashboard'
        component={Dashboard}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='Order'
        component={Order}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='FinishOrder'
        component={FinishOrder}
        options={{
          title: 'Finalizando',
          headerStyle: {
            backgroundColor: '#1D1D2E',
          },
          headerTintColor: '#FFFFFF'
        }}
      />
    </Stack.Navigator>
  )
}