import React from 'react';
import { View, Text } from 'react-native';
import { s } from '../style';
import { imc_ranges } from '../utils/range';
export const IMCInfo: React.FC = () => {
  return (
    <View style={s.infoContainer}>
      <Text style={s.infoTitle}>Classificação do IMC</Text>
      {imc_ranges.map((range, index) => (
        <View key={index} style={s.infoRow}>
          <Text style={s.infoKey}>{range.key}:</Text>
          <Text style={s.infoValue}>{range.value}</Text>
        </View>
      ))}
    </View>
  );
};
