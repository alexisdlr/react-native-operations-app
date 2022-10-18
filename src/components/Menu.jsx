import React from 'react'
import {View, StyleSheet} from 'react-native'
import StyledLink from './StyledLink'

const data = [
  {id: 1, title:'Suma' , to: '/sum'},
  {id: 2, title:'Resta', to: '/rest'},
  {id: 3, title:'Multiplicacion', to:'/mult'},
  {id: 4, title:'Division', to: '/division'}
]
const Menu = () => {
  return (
    <View style={styles.container}>
      {data.map(link => (
        <View key={link.id} style={{flexDirection: 'row'}}>
          <StyledLink  to={link.to} style={styles.links}>
          {link.title}
          </StyledLink>
        </View>
        
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  links: {
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(0,1,20,.2)',
    marginHorizontal: 5,
    marginTop: 8
   }
})

export default Menu