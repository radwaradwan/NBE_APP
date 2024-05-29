import React from 'react';
// import Transfer from './Components/Organisms/Transfer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Components/Screens/LoginScreen';
import SignUpScreen from './Components/Screens/SignUpScreen';
import DrawerNavigator from './Components/Screens/DrawerNavigator';
import SplashScreen from './Components/Screens/SplashScreen';
// import BottomTabNavigator from './Components/Molecules/BottomTabNav';
// import Input from './Components/Atoms/Input';
// import AddBen from './Components/Organisms/AddBen';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="HomeCards" component={HomeCards} />
//       <Drawer.Screen name="TransferScreen" component={TransferScreen} />
//       {/* Add more screens to the drawer as needed */}
//     </Drawer.Navigator>
//   );
// }

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
