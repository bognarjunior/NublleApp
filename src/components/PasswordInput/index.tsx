import React, { useState } from 'react';
import TextInput, { TextInputProps } from '../TextInput';
import Icon from '../Icon';

type Props = Omit<TextInputProps, 'RightComponent'>;
export default function PasswordInput(props: Props) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff' }
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
