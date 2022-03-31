import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Card from './Card'

export default function Dashboard() {
  return (
    <View style={styles.container}>
        <Header />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-start'
    }
})