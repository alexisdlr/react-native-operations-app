import React from 'react'
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import Menu from './Menu'
function Home() {
  return (
    <View style={styles.container}>
        <StyledText bold align={'center'} primary style={{fontSize: 40}}>Operaciones aritmeticas</StyledText>
        <Menu />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Home