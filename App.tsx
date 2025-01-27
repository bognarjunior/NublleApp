import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { Text } from './src/components/Text';
import Button from './src/components/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 20}}>
          <Text italic preset="headingMedium">App Nuble</Text>
          <Button title="Primary" marginBottom="s20" />
          <Button disabled title="Primary" marginBottom="s20" />

          <Button preset="outline" title="Outline" marginBottom="s20" />
          <Button disabled preset="outline" title="Outline" marginBottom="s20" />

          <Button loading title="Loading" marginBottom="s20" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
