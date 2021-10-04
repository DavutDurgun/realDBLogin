import React from 'react';

//navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Login from './pages/Login';


const Stack = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Router;
