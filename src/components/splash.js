import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const App = () => {
  let navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('HomeScreen');
  }, 2000);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: '100%', height: '15%'}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
