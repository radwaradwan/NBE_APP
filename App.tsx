import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './Components/Screens/LoginScreen';
import SignUpScreen from './Components/Screens/SignUpScreen';
import Home from './Components/Screens/Home';
// import TransferScreen from './Components/Screens/TransferScreen';
// import SettingsRow from './Components/Molecules/SettingsRow';
// import SendMoney from './Components/Molecules/SendMoney';
// import History from './Components/Molecules/History';
// import TopNav from './Components/Molecules/TopNav';
// import BottomTabNavigator from './Components/Molecules/BottomTabNav';
// import Visa from './Components/Atoms/Visa';
// import HomeCards from './Components/Screens/HomeCards';
import DrawerNavigator from './Components/Screens/DrawerNavigator';
// import AirPay from './Components/Screens/AirPay';
// import Map from './Components/Screens/Map';
// import GridListButton from './Components/Atoms/GridListButton';
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
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
