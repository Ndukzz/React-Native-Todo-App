import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>ONE</Text>
      <Text style={styles.boxTwo}>TWO</Text>
      <Text style={styles.boxThree}>THREE</Text>
      <Text style={styles.boxFour}>FOUR</Text>
    </View>
  )
}

export default Sandbox

const styles = StyleSheet.create({
  container: {
    // flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#ded'
  }, 
  boxOne: { 
    flex: 2, 
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: { 
    flex: 1, 
    backgroundColor: 'gold',
    padding: 20
  },
  boxThree: { 
    flex: 1, 
    backgroundColor: 'coral',
    padding: 30
  },
  boxFour: { 
    flex: 1, 
    backgroundColor: 'skyblue',
    padding: 40
  },
})