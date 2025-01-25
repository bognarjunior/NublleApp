import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { Text } from './src/components/Text';
import Button from './src/components/Button';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 20,}}>
        <Text italic preset="headingMedium">App Nuble</Text>
        <Button title="Entrar" />
      </View>
    </SafeAreaView>
  );
}

export default App;
