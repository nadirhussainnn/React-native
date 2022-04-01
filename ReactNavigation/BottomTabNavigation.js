import React from 'react'
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import all screens
import Profile from "./Screens/Profile";
import Home from './Screens/Home';
import Notifications from './Screens/Notifications';
import Settings from './Screens/Settings';
import Add from './Screens/Add';


const BottomTab = createBottomTabNavigator();


const AddMosqueButton=({children, onPress})=>{

    return(
        <TouchableOpacity
            style={{
                top:-30,
                justifyContent:'center',
                alignItems:'center',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <View style={{
                width:70,
                height:70,
                borderRadius:35,
                backgroundColor:'#f3ba1c'
            }}>
                {children}
            </View>
        </TouchableOpacity>
    )
}
const BottomTabNavigation=()=>{

    return(
        <>
            <BottomTab.Navigator
              screenOptions={{
                tabBarActiveTintColor: '#12FF12',
                tabBarInactiveTintColor: '#12FF12',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position:'absolute',
                    bottom:25,
                    left:10, 
                    right:10,
                    elevation:0,
                    borderRadius:15,
                    height: 90,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    ...styles.shadow
                  }
              }}
            >
                <BottomTab.Screen name="home" component={Home} 
                    options={{
                        // tabBarLabel:'Home',
                        
                        tabBarIcon:({focused})=>(
                            <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                                <Image source={require('./assets/images/home_ic.png')}
                                    resizeMode='contain'
                                    style={{
                                        width:25,
                                        height: 25,
                                        tintColor:focused?'#f3ba1c':'#0f1e3d'
                                    }}
                                >
                                </Image>
                                <Text style={{color:focused?'#f3ba1c':'#0f1e3d', fontSize:12}}>Home</Text>
                            </View>
                        )
                    }}
                />
                <BottomTab.Screen name="details" component={Notifications} 
                     options={{
                        // tabBarLabel:'Home',
                        
                        tabBarIcon:({focused})=>(
                            <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                                <Image source={require('./assets/images/notf_ic.png')}
                                    resizeMode='contain'
                                    style={{
                                        width:25,
                                        height: 25,
                                        tintColor:focused?'#f3ba1c':'#0f1e3d'
                                    }}
                                >
                                </Image>
                                <Text style={{color:focused?'#f3ba1c':'#0f1e3d', fontSize:12}}>Alerts</Text>
                            </View>
                        )
                    }}
                />
                <BottomTab.Screen name="Add Mosque" component={Add} 
                     options={{
                        // tabBarLabel:'Home',
                        tabBarIcon:({focused})=>(
                            <Image source={require('./assets/images/add_ic.png')}
                                resizeMode='contain'
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor:'#fff'
                                }}
                            >
                            </Image>
                        ),
                        tabBarButton:(props)=>(
                            <AddMosqueButton {...props} />
                        )
                    }}
                />
                <BottomTab.Screen name="settings" component={Settings}
                 options={{
                    // tabBarLabel:'Home',
                    
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                            <Image source={require('./assets/images/settings_ic.png')}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor:focused?'#f3ba1c':'#0f1e3d'
                                }}
                            >
                            </Image>
                            <Text style={{color:focused?'#f3ba1c':'#0f1e3d', fontSize:12}}>Settings</Text>
                        </View>
                    )
                }}
                />
                <BottomTab.Screen name="profile" component={Profile}
                
                options={{
                    // tabBarLabel:'Home',
                    
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                            <Image source={require('./assets/images/profile_ic.png')}
                                resizeMode='contain'
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor:focused?'#f3ba1c':'#0f1e3d'
                                }}
                            >
                            </Image>
                            <Text style={{color:focused?'#f3ba1c':'#0f1e3d', fontSize:12}}>Profile</Text>
                        </View>
                    )
                }}/>
            </BottomTab.Navigator>
        </>
    )
}


const styles=StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.15,
        shadowRadius:3.5,
        elevation:5,   
    }
});

export default BottomTabNavigation;