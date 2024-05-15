import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from './Components/Screens/LoginScreen';
import SignUpScreen from './Components/Screens/SignUpScreen';
import Home from './Components/Screens/Home';
import TransferScreen from './Components/Screens/TransferScreen';
// import SettingsRow from './Components/Molecules/SettingsRow';
import SendMoney from './Components/Molecules/SendMoney';
const Stack = createNativeStackNavigator();
function App() {
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="setting" component={SendMoney} options={{ headerShown: false }}/>
          <Stack.Screen name="transferScreen" component={TransferScreen} options={{ headerShown: false }}/>
          {/* <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/> */}
          <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
