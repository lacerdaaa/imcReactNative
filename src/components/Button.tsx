import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { s as globalStyles } from '../style/index';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[
        variant === 'primary' ? globalStyles.calculateButton : globalStyles.resetButton,
      ]}
      onPress={onPress}
    >
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};