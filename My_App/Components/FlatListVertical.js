/**
 * 
 * @author: Nadir
 * Flat List with Text and Image in each Row Aligned vertical
 */

import React from 'react'
import {FlatList} from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

function Item(props){

    return(
        <TouchableOpacity onPress={()=>{alert("Name is "+props.name)}}>
        <View style={styles.container}>
            <Text>{props.name}</Text>
            <Image source={props.img} style={{width:'40%', height:'40%'}} />
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:'greenyellow',
        marginTop:5,
        justifyContent: 'center',
        flexDirection:'row'
    }
})
export default function FlatListVertical() {

    function renderItem({item}){
        return <Item name={item.name} img={item.image}/>
    }
    const data=[
        {
            id:1,
            name:"Nadir",
            image:require("../assets/images/nodeexp.png")
        },
        {
            id:2,
            name:"Ahmed",
            image:require("../assets/images/ropston.jpg")
        },
        {
            id:3,
            name:"Ali Ahmed",
            image:require("../assets/images/reactjs.png")
        },
        {
            id:4,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:5,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:6,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:7,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:8,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:9,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:10,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:11,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:12,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:13,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:14,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:15,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:16,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:17,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
        {
            id:18,
            name:"Rizwan",
            image:require("../assets/images/web3.png")
        },
    ]
    return (
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
    >

   </FlatList>
  )
}