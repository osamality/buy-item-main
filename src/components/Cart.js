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
        <TouchableOpacity style={{position: 'absolute', right: '3%'}}>
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
        Home <Feather name="chevron-right" size={15} /> Shopping Cart
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
                  30
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    width: '30%',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingVertical: 8,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginVertical: 10,
                  }}>
                  <TouchableOpacity>
                    <Feather name="minus" />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity>
                    <Feather name="plus" />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    color: colors.ORANGE.DEFAULT,
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  PKR 700
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            width: '100%',
            height: 320,
            alignSelf: 'center',
            borderRadius: 1,
            elevation: 1,
            alignItems: 'center',
            marginTop: '2%',
            marginBottom: '10%',
          }}>
          <View style={{width: '90%', marginTop: '7%'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                borderBottomWidth: 1,
                paddingBottom: 15,
                borderBottomColor: 'lightgray',
              }}>
              Cart Total
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                borderBottomWidth: 1,
                paddingBottom: 15,
                borderBottomColor: 'lightgray',
              }}>
              <Text style={{color: 'black', fontSize: 18}}>Subtotal :</Text>
              <Text style={{color: 'black', fontSize: 18}}>PKR 4450</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 50,
              }}>
              <Text style={{color: colors.ORANGE.DEFAULT, fontSize: 18}}>
                Total :
              </Text>
              <Text style={{color: colors.ORANGE.DEFAULT, fontSize: 18}}>
                PKR 4450
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: colors.ORANGE.DEFAULT,
                padding: 10,
                width: '100%',
                marginTop: 20,
              }}
              onPress={() => navigation.navigate('Checkout')}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.ORANGE.DEFAULT,
                  textAlign: 'center',
                }}>
                PROCEED TO CHECKOUT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Continue Shopping <Feather name="refresh-cw" size={20} />
        </Text>
      </ScrollView>
    </View>
  );
};

export default Login;
