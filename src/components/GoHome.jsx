import React from 'react'
import StyledLink from './StyledLink'
import {StyleSheet } from 'react-native'
function GoHome() {
  return (
    <StyledLink to='/' style={Styles.gohome}>Home</StyledLink>
  )
}

const Styles = StyleSheet.create({
  gohome: {
    padding: 12,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 8,
    marginVertical: 20
  }
})
export default GoHome