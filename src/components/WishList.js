import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
} from 'native-base';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {colors, images} from './constant';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const RenderHeader = () => {
  let navigation = useNavigation()
  return (
    <View style={{height: '12%'}}>
      <View
        style={{
          width: '95%',
          height: 90,
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={30} />
        </TouchableOpacity>
        <Image source={images.logo} style={{height: 30, width: '30%'}} />
        <Text
          style={{
            position: 'absolute',
            right: '-1%',
            top: '20%',
            fontSize: 10,
            backgroundColor: colors.ORANGE.DEFAULT,
            borderRadius: 50,
            zIndex: 12,
            height: 18,
            width: 18,
            textAlign: 'center',
            paddingTop: 2,
            color: 'white',
          }}>
          23
        </Text>
        <TouchableOpacity style={{position: 'absolute', right: '3%'}} onPress={()=> navigation.navigate("Cart")}>
          <AntDesign name="shoppingcart" size={25} color="black" />
          <Text style={{color: 'black'}}>cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
let Login = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
      }}>
      <RenderHeader />
      <Text
        style={{padding: 10, borderRadius: 1, elevation: 1, marginBottom: 10}}>
        Home <Feather name="chevron-right" size={15} /> WishList
      </Text>
      <ScrollView
        style={{
          width: '95%',
          height: '86%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '98%',
          }}>
          {[1, 2, 3].map((item, key) => (
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                borderRadius: 1,
                elevation: 1,
                alignItems: 'center',
                marginTop: '3%',
                marginBottom: '3%',
              }}
              key={key}>
              <View style={{width: '90%', marginTop: '2%'}}>
                <Icon
                  name="close"
                  type="AntDesign"
                  style={{fontSize: 18, marginLeft: 'auto'}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}>
                  <Image
                    source={images.trendingProduct}
                    style={{height: 40, width: 40, marginRight: 10}}
                  />
                  <Text style={{color: 'black', fontSize: 18, paddingTop: 5}}>
                    product number 8
                  </Text>
                </View>

                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  30
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{}}>
          <Text>
            Share on:
            <EvilIcon
              name="sc-facebook"
              size={20}
              style={{
                color: 'gray',
                marginRight:2
              
              }}
            />
            <Entypo name="twitter" size={15} style={{color: 'gray',marginRight:5}} />
            <AntDesign name="instagram" size={15} style={{color: 'gray',marginRight:5}} />
            <AntDesign name="youtube" size={15} style={{color: 'gray',marginRight:5}} />
            <EvilIcon name="sc-pinterest" size={20} style={{color: 'gray',marginRight:5}} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
