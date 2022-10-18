import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Routes, Route} from 'react-router-native'
import Division from './Division';
import Home from './Home';
import Mult from './Mult';
import Rest from './Rest';
import Sum from './Sum';
const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route path='/' exact element={
                  <Home />
        }
        />
        <Route path='/sum' exact element={
                  <Sum />
        }
        />
         <Route path='/rest' exact element={
                  <Rest />
        }
        />
         <Route path='/mult' exact element={
                  <Mult />
        }
        />
         <Route path='/division' exact element={
                  <Division />
        }
        />
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Main