import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function ToDo() {


const [todoList, setTodoList] = useState([
    {task: "Learn React Native", id: 0},
    {task: "Make a todo list", id: 1},
    {task: "Get this over with", id: 2},
    {task: "Go to the market", id: 3},
    {task: "Make sure that Joshua drinks water...", id: 4},
])
const [input, setInput ]= useState('')

const pressHandler = (id) => {
  console.log(id);
}

const addTaskHandler = () => {
// adding task actions
const newId = Math.floor(Math.random())
console.log("Task added");
setTodoList((prevList) => {
  return {
    ...prevList,
    task: input
  }
})
}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To do app</Text>
      <View>
        <Text>Insert a task</Text>
        <TextInput 
        style={styles.input} 
        onChangeText={(val) => setInput(val)}
        />
        <TouchableHighlight style={styles.item} onPress={() => {addTaskHandler()}}>
          <Text>Add Task</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Text>Tasks</Text>
        {todoList.map((item) => {
          return (
            <TouchableOpacity key={item.id} onPress={pressHandler}>
              <Text style={styles.item}>{item.task}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 26,
    textAlign: "center"
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginHorizontal: "auto",
    marginVertical: 20,
    width: "95%"
  },
  item: {
    borderRadius: 5,
    backgroundColor: "teal",
    padding: 20,
    margin: 10,

  }
}
)
