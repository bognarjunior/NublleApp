import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { Text } from './src/components/Text';
import Button from './src/components/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box';
import TextInput from './src/components/TextInput';
import Icon from './src/components/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 20}}>
          <Text marginBottom="s8" preset="headingLarge">Olá</Text>
          <Text marginBottom="s40" preset="paragraphLarge">Digite seu e-mail e senha para entrar</Text>
          <TextInput
            boxProps={{mb:'s20'}} 
            errorMessage="E-mail inválido"
            placeholder="Digite seu e-mail"
            label="E-mail"
          />

          <TextInput
            placeholder="Digite sua senha"
            label="Senha"
            RightComponent={<Icon color="gray2" name="eyeOn" />}
            boxProps={{mb:'s10'}}
          />

          <Text
            preset="paragraphSmall"
            bold
            color="primary"
          >
            Esqueci minha senha
          </Text>
          <Button
            title="Entrar"
            preset="primary"
            marginTop="s48"
          />
          <Button
            title="Criar uma conta"
            preset="outline"
            marginTop="s12"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
