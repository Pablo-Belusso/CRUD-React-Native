import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Task from './src/pages/Task/';
import Details from './src/pages/Details/';
import NewTask from './src/pages/NewTask/';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefa">
        <Stack.Screen
          name="Tarefa"
          component={Task}
          options={{
            headerTintColor: '#f92e6a',
          }}
        />

        <Stack.Screen
          name="Nova Tarefa"
          component={NewTask}
          options={{
            headerTintColor: '#f92e6a',
          }}
        />

        <Stack.Screen
          name="Detalhe"
          component={Details}
          options={{
            headerTintColor: '#f92e6a',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
