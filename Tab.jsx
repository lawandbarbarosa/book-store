import { View,Text,Image } from 'react-native'
import React, { useState } from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home/Home'

import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()

const Tabs = () => {

const [color,seColor]=useState('white')
   

  return (
    <Tab.Navigator screenOptions={{
     tabBarStyle:{
      backgroundColor:'#443C68',padding:10,width:'90%',
      alignItems:'center',justifyContent:'space-evenly',position:'absolute',
      bottom:12,left:20,borderRadius:20,
     },
    }} >
        <Tab.Screen 
        name='Home'
 component={Home}
 options={{
  headerShown:false,
  tabBarIcon:(props)=> <Feather name="home" size={24} color="white" />,
  tabBarLabelStyle:{
    color:'white',marginTop:6
  }
    }}
        />

   <Tab.Screen
   name='search'
   component={Home}
   options={{headerShown:false,
    tabBarIcon:(props)=><Ionicons name="notifications" size={24} color="white" />,
    tabBarLabelStyle:{
      color:'white',marginTop:6
    }
  }}
   />

   <Tab.Screen 
   name='notification'
   component={Home}
   options={{
    headerShown:false,
    tabBarIcon:(props)=> <EvilIcons name="search" size={30} color="white"  />,
    tabBarLabelStyle:{
      color:'white',marginTop:6
    }
   }}
   />

   <Tab.Screen
   name='menu'
   component={Home}
   options={{
    headerShown:false,
    tabBarIcon:(props)=><Entypo name="menu" size={24} color="white" />,
    tabBarLabelStyle:{
      color:'white',marginTop:6
    }
   }}
   />
    </Tab.Navigator>
  )
}

export default Tabs