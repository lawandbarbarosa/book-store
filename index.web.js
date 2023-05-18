import { AppRegistry } from 'react-native';
import App from './App'; // Replace './App' with the path to your app's main component

AppRegistry.registerComponent('book-store', () => App);
AppRegistry.runApplication('book-store', {
  rootTag: document.getElementById('root'),
});