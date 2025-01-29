import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { Text } from './src/components/Text';
import Button from './src/components/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import Icon from './src/components/Icon';

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

          <Icon name="arrowLeft" color="primary" size={30} />
          <Icon name="eyeOn" color="primary" size={30} />
          <Icon name="eyeOff" color="primary" size={30} />
          <Icon name="trash" color="primary" size={30} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
