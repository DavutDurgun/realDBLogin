import React from 'react';
import FlashMessage from "react-native-flash-message"; //Toast message
//auth
import auth from '@react-native-firebase/auth';

//navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages';

//styles
import colors from './assets/styles/colors';

//icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);


  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer >

      <Stack.Navigator >
        {!userSession ?
          <Stack.Screen name='AuthStack' component={AuthStack} />
          :
          <Stack.Screen
            name='MessagesPage'
            component={Messages}
            options={{
              title: 'Dertler',
              headerTintColor: colors.darkGreen,
              headerRight: () => (
                <Icon
                  name='logout'
                  size={25}
                  color={colors.darkGreen}
                  onPress={() => auth().signOut()}
                />
              )
            }}
          />
          
        }
      </Stack.Navigator>

      <FlashMessage position="top" />
    </NavigationContainer>
  );
};



export default Router;
