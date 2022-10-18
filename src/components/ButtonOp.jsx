import React from 'react'
import { StyleSheet, Button } from 'react-native'
function ButtonOp({op, title}) {
  return (
    <Button
    onPress={op}
    title={title}
    color="#000"
    style={styles.button}
    />  
    )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    marginVertical: 18,
    padding: 12,
    backgroundColor: '#ff731d',
    color: '#000'
  }
})

export default ButtonOp