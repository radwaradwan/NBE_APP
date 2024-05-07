import React from 'react';
import {View,Text, TextInput} from 'react-native';
import SubmitButton from './Components/Atoms/SubmitButton';

function App() {
  return(
    <View>
      <Text>hello</Text>
      <TextInput placeholder="ente your name"/>
      <SubmitButton title="Log In"/>
    </View>
  );
}

export default App;
