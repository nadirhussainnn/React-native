import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0f1e3d'
    },
    text:{
      fontSize:24,
      fontWeight:'bold',
      color:'#FFFFFF'
    }
})