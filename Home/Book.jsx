import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons'; 
import booksData from "./bookData"
import { TouchableWithoutFeedback } from 'react-native';

const Book = ({navigation,search}) => {

  const handleChange =(category)=>{
    filteringItems(category)
  }


  const filteringItems = booksData.filter((item)=>(
    item.book_name && item.book_name.toUpperCase().includes(search.toUpperCase())
  )) 

  const onSubmit =(e)=>{
 e.preventDefault()
  }

  const renderItem = ({item}) => {
    const { book_id, book_name, cover, hours, author,description} = item;
    return (
<TouchableWithoutFeedback
onSubmit={onSubmit} 
onPress={()=> navigation.navigate('Bookdetail',{selectBook:item})}
  key={book_id}
  style={styles.books}
>
  <View onSubmit={onSubmit}>
    <Image
      source={{ uri: cover }}
      resizeMode='cover'
      style={styles.image} 
    />
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
      <Text
        style={{ fontSize: 20, color: 'white', marginLeft: 5,fontWeight:600 }}
      >
        {book_name}
      </Text>
    </View>
  </View>
</TouchableWithoutFeedback>
    );
  };


  const [books,setBooks]=useState([])

  return (
    <View style={styles.bookcontainer}>
     <View style={styles.headerbook}>
     <Text style={{color:'white',fontSize:30,fontWeight:700}}>
      My book
     </Text>
     <Text  style={{color:'white',fontSize:13,borderBottomColor:'grey'}}>
      see more
     </Text>
     </View>
    
     <TouchableOpacity style={styles.books}>
    <FlatList
    horizontal
    data={booksData}
    renderItem={renderItem}
    keyExtractor={(item)=>`${item.book_id}`}
    />
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bookcontainer:{
    padding:12
  },
  headerbook:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  image:{
 width:150,
 height:240,
 borderRadius:20,
 marginRight:20,
 marginTop:20,
  }
})

export default Book;