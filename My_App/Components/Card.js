import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Card() {
  return (
        <View style={styles.card}>
            <View>
            <Icon name="ios-person" size={30} color="#4F8EF7" />
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        padding:5,
    }
})