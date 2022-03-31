import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function PressableBox() {
  return (
    <View style={styles.layout}>
        <Pressable>
          {(state)=><Box pressed={state.pressed}/>}     
          {/* This pressed state is passed as props to Box */}
        </Pressable>
    </View>
  )
}

function Box(props){
    return(
        <View style={[styles.box,props.pressed?{backgroundColor:'blue'}:{backgroundColor:'red'}]}>
            <Text style={[styles.text]}>Press Me</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    layout:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
        width: 100,
        height: 100
    },
    text:{
        textAlign:'center',
        
    }
})