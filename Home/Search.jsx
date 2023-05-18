import { View, Text,StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import { EvilIcons } from '@expo/vector-icons'; 

import search from "../assets/search.png"

const Search = ({search,setSearch}) => {


  return (
    <View style={styles.containersearch}>
        <TouchableOpacity 
        style={{borderColor:'white',width:'90%',borderWidth:3,
         borderRadius:15,flexDirection:'row',justifyContent:'space-between',
         alignItems:'center',
 }}>
        <TextInput placeholder='search for you fav book....'
     placeholderTextColor='white'
     value={search}
     onChange={(e)=> setSearch(e.target.value)}
     style={{
    padding:10,
    }} />
<EvilIcons name="search" size={30} color="white" 
style={{marginRight:12,backgroundColor:'#FF4C29',height:'70%',width:'10%',borderWidth:0,
borderRadius:50,
alignSelf:'center',alignItems:'center',justifyContent:'center',paddingTop:2}} />
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    containersearch:{
        padding:12,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default Search