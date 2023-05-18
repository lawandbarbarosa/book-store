import { View, Text, SafeAreaView,StyleSheet, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Header from "./Header"
import Search from './Search'
import Book from './Book'
import BookSeller from './BookSeller'



const Home = ({navigation}) => {

  const [search,setSearch]=useState('')


  return (
    <SafeAreaView style={{backgroundColor:'#152D35',paddingTop:40,flex:1}}>
     <Header />
     <ScrollView>
     <Search search={search} setSearch={setSearch} />
     <Book search={search} setSearch={setSearch} navigation={navigation} />
     <BookSeller navigation={navigation} />
     </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
 
})

export default Home