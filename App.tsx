import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import Login from './src/screens/auth/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SingUp from './src/screens/auth/SingUp';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        <SingUp />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
