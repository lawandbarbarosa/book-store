import { View, 
  Text,StyleSheet, 
  Image, ScrollView,
   ImageBackground, 
  TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 


const Detail = ({route,navigation}) => {

  const [selectBook,setSelectBook]=useState(null)

  useEffect(()=>{
    const {selectBook} = route.params
    setSelectBook(selectBook)
  })

  return (
    <>
    <ScrollView>
      <ImageBackground source={{uri:selectBook?.cover}} blurRadius={5}
       style={{width:'100%',height:570,position:'relative'}}>
      <View 
      style={{flexDirection:'row',
      alignItems:'center',justifyContent:'space-between',padding:12,marginTop:30,zIndex:20}}>
      <AntDesign name="arrowleft" size={24} color="white"onPress={()=> navigation.goBack() } />
      <Text style={{fontSize:20,fontWeight:600,color:'white'}}>{selectBook?.book_name}</Text>
      <Feather name="more-horizontal" size={24} color="white" />
      </View>
      <View style={{backgroundColor:selectBook?.backggroundColor,
        width:'100%',height:'100%',position:'absolute',opacity:0.9}} />
        <View 
        style={{alignItems:'center',flexDirection:'column',
        justifyContent:'center',marginTop:50}}>
        <Image source={{uri:selectBook?.cover}}
        style={{width:225,height:225,borderRadius:20}} resizeMode='cover' />
        <View style={{flexDirection:'column',marginTop:22}}>
        <Text style={{fontSize:20,fontWeight:600,color:'white',textAlign:'center'}}>{selectBook?.book_name}</Text>
        <Text style={{fontSize:14,fontWeight:400,color:'#F0EEED',textAlign:'center',marginTop:8}}>
          {selectBook?.author}</Text>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
            <TouchableOpacity style={{backgroundColor:'#E96479',padding:12,width:105,borderRadius:10}}>
              <Text style={{color:'white',fontSize:15,fontWeight:600,textAlign:'center'}}>{selectBook?.genre1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#C92C6D',padding:12,width:105,
            marginVertical:20,marginHorizontal:20,borderRadius:10}}>
            <Text style={{color:'white',fontSize:15,fontWeight:600,textAlign:'center'}}>{selectBook?.genre2}</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{backgroundColor:'#18122B',padding:12,width:105,borderRadius:10}}>
             <Text style={{color:'white',fontSize:15,fontWeight:600,textAlign:'center'}}>{selectBook?.genre3}</Text>
             </TouchableOpacity>
          </View>
        </View>
        </View>
        </ImageBackground>
        <View style={{backgroundColor:'#393646',width:'100%',padding:12,paddingLeft:20,height:600}}>
        <View style={{flexDirection:'column',alignItems:'flex-start'}}>
        <Text style={{fontSize:30,fontWeight:600,color:'white'}}>Discription</Text>
        <Text style={{fontSize:15,color:'white',marginTop:20}}
         numberOfLines={20}>{selectBook?.description}</Text>
        </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{backgroundColor:'#FF8C32',width:'90%',borderRadius:20,
      padding:20,position:'absolute',height:60,bottom:20,alignSelf:'center',flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:600,color:'white',marginHorizontal:63,marginVertical:-5}}>Start Reading</Text>
      </TouchableOpacity>
      </>
  )
}

const styles = StyleSheet.create({

})

export default Detail