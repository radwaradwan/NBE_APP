import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Components/Screens/LoginScreen';
import SignUpMobileScreen from './Components/Screens/SignUpMobileScreen';
import SignUpOtpScreen from './Components/Screens/SignUpOtpScreen';
// import SignUpPasswordScreen from './Components/Screens/SignUpPasswordScreen';
// import SignUpCongratulationScreen from './Components/Screens/SignUpCongratulationScreen';
// import Home from './Components/Screens/Home';
import Transfer from './Components/Screens/Transfer';
const Stack = createNativeStackNavigator();
function App() {
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="transfer" component={Transfer} options={{ headerShown: false }}/>
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="signupMobile" component={SignUpMobileScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="otp" component={SignUpOtpScreen} options={{ headerShown: false }}/>
          {/* <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="signupPassword" component={SignUpPasswordScreen} options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="signupPassword" component={SignUpCongratulationScreen} options={{ headerShown: false }}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
