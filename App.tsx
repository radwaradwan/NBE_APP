import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Components/Screens/LoginScreen';
import SignUpMobileScreen from './Components/Screens/SignUpMobileScreen';
import SignUpOtpScreen from './Components/Screens/SignUpOtpScreen';
import SignUpPasswordScreen from './Components/Screens/SignUpPasswordScreen';
// import SignUpCongratulationScreen from './Components/Screens/SignUpCongratulationScreen';

const Stack = createNativeStackNavigator();
function App() {
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="signupMobile" component={SignUpMobileScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="otp" component={SignUpOtpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="signupPassword" component={SignUpPasswordScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <LoginScreen/> */}
      {/* <SignUpMobileScreen/> */}
      {/* <SignUpOtpScreen /> */}
      {/* <SignUpPasswordScreen/> */}
      {/* <SignUpCongratulationScreen/> */}
    </>
  );
}

export default App;
