import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Button, FlatList,Text,TouchableWithoutFeedback } from 'react-native';
import booksData from './bookData';

import { AntDesign } from '@expo/vector-icons';


const BookSeller = ({navigation}) => {
  const categories = [
    { id: 1, category: 'best seller' },
    { id: 2, category: 'the latest' },
    { id: 3, category: 'coming soon' },
  ];

  const [focused, setFocused] = useState('best seller');


  const renderItem = ({ item }) => {
    const { book_id, book_name, cover, hours, author,genre1,genre2,genre3 } = item;
    return (
      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Bookdetail',{selectBook:item})}>
      <View key={book_id} style={{flexDirection:'row'}} >
         <Image source={{ uri: cover }} resizeMode='cover'
         style={{ width: 100, height: 140,marginBottom:25,marginLeft:12,borderRadius:15,marginTop:20 }} />
        <View style={{flexDirection:'column',marginTop:15}}>
        <View style={{flexDirection:'column',alignItems:'flex-start'}}>
         <View style={{flexDirection:'column',alignItems:'flex-start'}}>
           <Text style={{fontSize:20,fontWeight:600,color:'white',marginLeft:20}}>{book_name}</Text>
           <Text style={{fontSize:13,fontWeight:400,color:'gray',marginLeft:20,marginTop:5}}>{author}</Text>
         </View>
         <View style={{maringTop:15,marginLeft:15,flexDirection:'row',}}>
          <Text style={{color:'gray',marginTop:30}}> 
          <AntDesign name="clockcircleo" size={15} color="white" /> {hours}</Text>
          <Text style={{color:'gray',marginTop:30,marginLeft:20}}> 
          <AntDesign name="copy1" size={15} color="white" /> {hours}</Text>
         </View>
         </View>
         <View style={{marginTop:12,marginLeft:12,}}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap',width:'90%'}}>
            <Text style={{marginLeft:12,backgroundColor:'#443C68',
            padding:4,borderRadius:22,color:'white',fontWeight:600}}>{genre1}</Text>
            <Text style={{marginLeft:12,backgroundColor:'#18122B',
            padding:4,borderRadius:22,color:'white',fontWeight:600}}>{genre2}</Text>
            <Text style={{marginLeft:12,backgroundColor:'#E96479',marginTop:12,
            padding:4,borderRadius:22,color:'white',fontWeight:600}}>{genre3}</Text>
          </TouchableOpacity>
         </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.category}>
        {categories.map((category) => (
          <Button
            key={category.id}
            title={category.category}
            color={focused === category.category ? 'white' : 'gray'}
          />
        ))}
      </TouchableOpacity>

      {/* Uncomment the following TouchableOpacity and FlatList to render the book items */}
      <TouchableOpacity>
        <FlatList
          renderItem={renderItem}
          data={booksData}
          keyExtractor={(item) => `${item.book_id}`}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    marginTop: 12,
  },
});

export default BookSeller;
