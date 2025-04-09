export const imacCalculo = (weigt: number, height: number): number => {
  return weigt / (height * height);
};

export const getIMCClassification = (imc: number): { classification: string; color: string } => {
    if (imc < 18.5) {
      return { classification: 'Abaixo do peso', color: '#3498db' };
    } else if (imc < 25) {
      return { classification: 'Peso normal', color: '#2ecc71' };
    } else if (imc < 30) {
      return { classification: 'Sobrepeso', color: '#f39c12' };
    } else if (imc < 35) {
      return { classification: 'Obesidade Grau I', color: '#e67e22' }; 
    } else if (imc < 40) {
      return { classification: 'Obesidade Grau II', color: '#e74c3c' }; 
    } else {
      return { classification: 'Obesidade Grau III', color: '#c0392b' }; 
    }
  };