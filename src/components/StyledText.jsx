import React from 'react'
import { Text, StyleSheet} from 'react-native'
function StyledText({bold, primary, align, secondary, style, children}) {
  const textStyles = [
    styles.text,
    bold && styles.textBold,
    align === 'center' && styles.textCenter,
    primary && styles.textPrimary,
    secondary && styles.textSecondary,
    style

  ]
  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  text: {fontSize: 20},
  textCenter: {textAlign: 'center'},
  textPrimary:{color: '#ff731d'},
  textSecondary: {
    color: '#000'
  },
  textBold: {fontWeight: 'bold'}
})
export default StyledText