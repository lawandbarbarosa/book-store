import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Tabs from './Tab';
import Detail from './detail/Detail';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='Bookdetail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
