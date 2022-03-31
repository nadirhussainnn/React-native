import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FlexBox() {
  return (
    <View style={styles.layout}>
        <View style={[styles.box,{backgroundColor:'red'}]}/>
        <View style={[styles.box,{backgroundColor:'blue'}]}/>
        <View style={[styles.box,{backgroundColor:'green'}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    layout:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#FFFFFF',
    },
    box:{
      flex: 1,
        backgroundColor:'red'      
    },
})

/**
 * 
 * row renders child elements from left to right, or horizontally.
row-reverse renders child elements from right to left, or reversed horizontally.
column renders child elements from top to bottom, or vertical.
column-reverse renders child elements from bottom to top, or reversed vertically.
 */

/**
 * justify-content
 * 
 * Besides center, there are 5 more options available.
 * The options flex-start and flex-end are related to the parent flexbox.
 * They both mean: “position the child elements where the parent flexbox starts or ends”.
 *  The other options space-around,
 *  space-between, and space-evenly are related to where gaps should be placed between the child elements.
 */