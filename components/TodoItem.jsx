import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default TodoItem = ({ item, pressHandler }) => {

  return (
    <TouchableOpacity onPress={()=> {pressHandler(item.key)}}>
      <View style={styles.item}>
        <AntDesign name="delete" size={24} color="black" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )   
} 

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 15,
    backgroundColor: 'teal',
    borderRadius: 10,
  },
  itemText: {
    paddingLeft: 10
  }
})