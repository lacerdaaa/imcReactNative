import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { s } from '../style';
interface InputFieldProps extends TextInputProps {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => {
  return (
    <View style={s.inputContainer}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        style={s.input}
        keyboardType="numeric"
        {...rest}
      />
    </View>
  );
};