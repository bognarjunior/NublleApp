import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text italic preset="headingMedium">Appttt</Text>
      <Text preset="headingMedium" style={{fontFamily: 'Satoshi-Bold'}}>App</Text>
      <Text preset="headingLarge" style={{textAlign: 'center', color: 'orange'}}>App</Text>
      <Text italic preset="paragraphCaption" style={{textAlign: 'center', color: 'green'}}>App</Text>
      <Text style={{textAlign: 'center'}}>App</Text>
    </SafeAreaView>
  );
}

export default App;
