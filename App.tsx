import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Components/Screens/LoginScreen';
import SignUpScreen from './Components/Screens/SignUpScreen';
import DrawerNavigator from './Components/Screens/DrawerNavigator';
import SplashScreen from './Components/Screens/SplashScreen';

const Stack = createNativeStackNavigator();


function App() {
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
