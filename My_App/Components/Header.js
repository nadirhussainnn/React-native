import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Muslim User Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        backgroundColor:'#0f1e3d',
        flex:0.1,
        justifyContent:'center',
    },
    headerText:{
        color:'white',
        // fontWeight:'bold',
        fontSize:18,
        fontFamily:'Montserrat-Bold'
    }
})