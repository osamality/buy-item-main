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
    let navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
      }}>
      <RenderHeader />
      <Text
        style={{padding: 10, borderRadius: 1, elevation: 1, marginBottom: 10}}>
        Home <Feather name="chevron-right" size={15} /> Orders
      </Text>
      <ScrollView
        style={{
          width: '95%',
          height: '86%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={{marginRight: '5%'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily: 'sans-serif',
              color: 'black',
            }}>
            Orders
          </Text>
        </TouchableOpacity>

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
                marginTop: '5%',
                marginBottom: '10%',
              }}
              key={key}>
              <View style={{width: '90%', marginTop: '7%'}}>
                <Icon
                  name="close"
                  type="AntDesign"
                  style={{fontSize: 18, marginLeft: 'auto'}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 15,
                  }}>
                  <Image
                    source={images.trendingProduct}
                    style={{height: 70, width: 70, marginRight: 10}}
                  />
                  <Text style={{color: 'black', fontSize: 18, paddingTop: 15}}>
                    product number 8
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 10,
                    textTransform: 'capitalize',
                  }}>
                  Shipping charges according to distance
                </Text>
                <Text
                  style={{
                    color: colors.ORANGE.DEFAULT,
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 10,
                    textTransform: 'capitalize',
                  }}>
                  View Shipping Charges of vender
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  PKR 100
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  20-Dec-2021
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  Status: Confirmed
                </Text>

                <TouchableOpacity
                onPress={()=> navigation.navigate("CheckStatus")}
                  style={{
                    borderWidth: 1,
                    borderColor: colors.ORANGE.DEFAULT,
                    padding: 10,
                    width: '100%',
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: colors.ORANGE.DEFAULT,
                      textAlign: 'center',
                    }}>
                    Order Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            width: '98%',
          }}>
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              borderRadius: 1,
              elevation: 1,
              alignItems: 'center',
              marginTop: '5%',
              marginBottom: '10%',
            }}>
            <View style={{width: '90%', marginTop: '7%'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  paddingTop: 15,
                  paddingBottom: 15,
                }}>
                My Account
              </Text>
              {[
                {
                    label: 'Profile Setting',
                    function : ()=> navigation.navigate("MyProfile")
                  },
                  {
                    label: 'My Orders',
                    function : ()=> alert('You are Current on this Screen')
                  },
                  {
                    label: 'Change Password',
                    function : ()=> navigation.navigate("ChangePassword")
                  },
                  {
                    label: 'Logout',
                    function : ()=> navigation.navigate("HomeScreen")
                  },
              ].map((item, key) => (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: colors.ORANGE.DEFAULT,
                    padding: 10,
                    width: '100%',
                    marginBottom: 20,
                  }}
                  key={key}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: colors.ORANGE.DEFAULT,
                      textAlign: 'center',
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
