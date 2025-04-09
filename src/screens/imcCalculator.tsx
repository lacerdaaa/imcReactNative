import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { s } from '../style/index';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { ResultDisplay } from '../components/DisplayResult';
import { IMCInfo } from '../components/InfoIMC';
import { imcResult } from '../types';
import { imcCalculation, getIMCClassification } from '../utils/calc';

export const IMCCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<imcResult | null>(null);
  const [error, setError] = useState<string>('');

  const calculateIMC = (): void => {
    setError('');
    
    if (!weight || !height) {
      setError('Por favor, preencha todos os campos.');
      setResult(null);
      return;
    }

    const weightValue = parseFloat(weight.replace(',', '.'));
    const heightValue = parseFloat(height.replace(',', '.')) / 100; 

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      setError('Por favor, insira valores válidos.');
      setResult(null);
      return;
    }

    const imc = imcCalculation(weightValue, heightValue);
    
    const { classification, color } = getIMCClassification(imc);

    setResult({
      imc,
      classification,
      color
    });
  };

  const resetFields = (): void => {
    setWeight('');
    setHeight('');
    setResult(null);
    setError('');
  };

  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={s.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={s.scrollView}>
          <View style={s.content}>
            <Text style={s.title}>Calculadora de IMC</Text>
            
            <InputField
              label="Peso (kg)"
              placeholder="Ex: 70.5"
              value={weight}
              onChangeText={setWeight}
            />
            
            <InputField
              label="Altura (cm)"
              placeholder="Ex: 170"
              value={height}
              onChangeText={setHeight}
            />
            
            {error ? <Text style={s.errorText}>{error}</Text> : null}
            
            <View style={s.buttonContainer}>
              <Button 
                title="Calcular" 
                onPress={calculateIMC} 
                variant="primary"
              />
              
              <Button 
                title="Limpar" 
                onPress={resetFields} 
                variant="secondary"
              />
            </View>
            
            {result && <ResultDisplay result={result} />}
            
            <IMCInfo />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
