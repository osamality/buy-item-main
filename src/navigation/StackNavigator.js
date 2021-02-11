import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// Drawer Desgin
import DrawerContent from './DrawerContent'

// Screens
import Splash from '../components/splash'
import HomeScreen from '../components/HomeScreen'
import CheckOrders from '../components/CheckOrder'
import CheckStatus from '../components/OrderDetails'
import MyProfile from '../components/MyProfile'
import ChangePassword from '../components/ChangePassword'
import Cart from '../components/Cart'
import WishList from '../components/WishList'
import ProductDetail from '../components/ProductDetail'
import ProductFilters from '../components/ProductFilters'



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {

    let options = {
        headerShown:false
    }

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <DrawerContent {...props}  />}>
          <Drawer.Screen name="Splash" component={Splash} options={options}/>
          <Drawer.Screen name="HomeScreen" component={HomeScreen} options={options}/>
          <Drawer.Screen name="CheckOrder" component={CheckOrders} options={options}/>
          <Drawer.Screen name="MyProfile" component={MyProfile} options={options}/>
          <Drawer.Screen name="CheckStatus" component={CheckStatus} options={options}/>
          <Drawer.Screen name="ChangePassword" component={ChangePassword} options={options}/>
          <Drawer.Screen name="Cart" component={Cart} options={options}/>
          <Drawer.Screen name="WishList" component={WishList} options={options}/>
          <Drawer.Screen name="ProductDetail" component={ProductDetail} options={options}/>
          <Drawer.Screen name="ProductFilters" component={ProductFilters} options={options}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
