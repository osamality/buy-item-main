import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <>
      <StackNavigator />
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
