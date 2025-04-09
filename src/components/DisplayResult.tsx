import React from 'react';
import { View, Text } from 'react-native';
import { s } from '../style/index';
import { imcResult } from '../types';

interface ResultDisplayProps {
  result: imcResult;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <View style={[s.resultContainer, { borderColor: result.color }]}>
      <Text style={s.resultTitle}>Resultado</Text>
      <Text style={s.imcValue}>
        IMC: <Text style={{ color: result.color, fontWeight: 'bold' }}>
          {result.imc.toFixed(2)}
        </Text>
      </Text>
      <Text style={[s.classification, { color: result.color }]}>
        {result.classification}
      </Text>
    </View>
  );
};