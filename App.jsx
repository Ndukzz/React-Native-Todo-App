import React, { useState } from "react"; 

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import FormInput from "./components/FormInput";


export default function App() {
  const [ todos, setTodos ] = useState([
    { text: "Learn Js", key: 1},
    { text: "Learn React", key: 2},
    { text: "Create a React App", key: 3},
    { text: "Learn React-Native", key: 4},
    { text: "Create a React-Native App", key: 5,}
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => { 
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const taskHandler = (task) => {
    setTodos((prevTodos) => {
      return [
        { text: task, key: Math.random()},
        ...prevTodos  
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <FormInput taskHandler={taskHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos} 
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: { 
    padding: 40
  },
  list: { 
    marginTop: 20
  }
});
