import React, { Component, useEffect, useState } from 'react';
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
import axios from 'axios';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { colors, images } from './constant';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { FlatList } from 'react-native-gesture-handler';
import { BASEURL, ENDPOINTS } from '../config/Config';




const RenderHeader = () => {
  let navigation = useNavigation();
  return (
    <View style={{ height: '12%' }}>
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
        <Image source={images.logo} style={{ height: 30, width: '30%' }} />
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
        <TouchableOpacity
          style={{ position: 'absolute', right: '3%' }}
          onPress={() => navigation.navigate('Cart')}>
          <AntDesign name="shoppingcart" size={25} color="black" />
          <Text style={{ color: 'black' }}>cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

let renderItem = (item) => {
  // let navigation = useNavigation();
  return (

    <Card style={{ width: '48%', margin: '1%', padding: '0.8%', borderRadius: 2 }}>
      <AntDesign
        name="hearto"
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          color: colors.LIGHTGREY.DEFAULT,
        }}
        size={30}
      />
      <Card.Cover source={{ uri: `https://thecodeditors.com/test/multi_vendor/admin/plugin/product_images/${item.item.image_name}` }} style={{}} />
      <Card.Content>
        <Paragraph style={{ fontSize: 12, color: colors.LIGHTGREY.DEFAULT }}>
          {item.item.pro_des}
        </Paragraph>
        <Paragraph>{item.item.pro_name}</Paragraph>
        <Paragraph style={{ fontSize: 14, color: colors.ORANGE.DEFAULT }}>
          {item.item.pro_price}
        </Paragraph>
      </Card.Content>
      <TouchableOpacity
        style={{
          borderColor: colors.ORANGE.DEFAULT,
          width: '100%',
          borderWidth: 1,
          marginTop: 5,
          borderRadius: 3

        }}
        onPress={() => navigation.navigate('CheckOrder')}>
        <Text
          style={{
            fontSize: 18,
            color: colors.ORANGE.DEFAULT,
            textAlign: 'center',
          }}>
          Add
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

let Login = () => {
  const [products, setProducts] = useState([])

  useEffect( async () => {

   await axios.get(BASEURL + ENDPOINTS.RECENT_PRODUCTS)
      .then(res => {
        const proList = res.data.Data;
        setProducts(proList);
      })

  }, []);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
      }}>
      <RenderHeader />
      <Text
        style={{ padding: 10, borderRadius: 1, elevation: 1, marginBottom: 10 }}>
        Home <Feather name="chevron-right" size={15} /> Bed Room 1
      </Text>
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo name="menu" size={25} />
          <Text style={{ fontSize: 16, textTransform: 'uppercase' }}>
            Filters
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ fontSize: 16, textTransform: 'capitalize' }}>
          Showing 12 products
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          marginTop: '2%',
          alignItems: 'space-between',
          flex: 1,
          // backgroundColor: 'red',
          // marginLeft: 'auto',
          // marginRight: 'auto',
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(key) => key.pro_id}
          renderItem={(item) => renderItem(item)}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: 'center',
          }}
        />
      </View>

    </View>
  );
};

export default Login;
