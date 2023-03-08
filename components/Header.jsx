import React from 'react'
import { View, Text, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Todo App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: "teal",
        paddingTop: 38, 
    },
    title: {
        textAlign: "center",
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    }
})