import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import ButtonOp from './ButtonOp';
import GoHome from './GoHome';
import StyledLink from './StyledLink';
import StyledText from './StyledText'
function Sum() {
  const [number, onChangeNumber] = useState(null);
  const [number2, onChangeNumber2] = useState(null);
  const [result, setResult] = useState(null);

  const sumar = () => {
    
    setResult(parseInt(number) + parseInt(number2));
  }
  return (
    <View>
      <GoHome />
      <StyledText bold primary style={{fontSize: 40}}>Suma</StyledText>
      <StyledText secondary style={{fontSize: 16}}>Ingrese 2 valores para realizar la suma</StyledText>
      <View style={styles.containerNums}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ingrese un numero"
          keyboardType="numeric"
      />
       <TextInput
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Ingrese un numero"
          keyboardType="numeric"
      />
      </View>
      <ButtonOp
      op={sumar}
      title="Sumar"
      />
      {
        result ? <StyledText align='center' style={[styles.result,styles.resultOp]}>{result}</StyledText>: <StyledText style={styles.result}>No hay resultado.</StyledText>
      }
     
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    border: 0,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8

  },
  containerNums: {
    flexDirection: 'row'
  },
  result: {
    fontSize: 30, 
    marginVertical: 15,
    color: '#ccc'
  },
  resultOp: {
    color: '#ff731d'
  }
})

export default Sum