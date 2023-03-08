import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from "react-native"

export default TodoItem = ({ item, pressHandler }) => {

  return (
    <TouchableOpacity onPress={()=> {pressHandler(item.key)}}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )   
} 

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 15,
    backgroundColor: 'teal',
    borderRadius: 10,
  }
})