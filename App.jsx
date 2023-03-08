import React, { useState } from "react"; 

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";

export default function App() {
  const [ todos, setTodos ] = useState([
    { text: "Learn Js", key: 1},
    { text: "Learn React", key: 2},
    { text: "Create a React App", key: 3},
    { text: "Learn React-Native", key: 4},
    { text: "Create a React-Native App", key: 5,}
  ])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/** To form*/}
        <View style={styles.list}>
          <FlatList 
            data={todos} 
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
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
