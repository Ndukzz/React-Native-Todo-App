import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const FormInput = ({ taskHandler }) => {

  const [ text, setText ] = useState('')

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <Text style={styles.text}>Add a Task</Text>
      <TextInput 
        style={styles.input}
        placeholder='Input Task...'
        onChangeText={changeHandler}
      />
      <Button onPress={() => taskHandler(text)} title='Submit Task' color='teal' />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10, 
    padding: 10,
    marginVertical: 10
  },
  text: {
    fontSize: 30
  }
})