import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Divider, Button, Card, Title, Paragraph} from 'react-native-paper';
import {colors, images} from './constant';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Rating, AirbnbRating} from 'react-native-ratings';

const RenderHeader = () => {
  let navigation = useNavigation();
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
        <TouchableOpacity
          style={{position: 'absolute', right: '3%'}}
          onPress={() => navigation.navigate('Cart')}>
          <AntDesign name="shoppingcart" size={25} color="black" />
          <Text style={{color: 'black'}}>cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

let renderItem = () => {
  let navigation = useNavigation();
  return (
    <Card style={{marginRight: '2%', width: '49%', height: 230, marginTop: 10}}>
      <AntDesign
        name="hearto"
        style={{
          position: 'absolute',
          zIndex: 12,
          right: 10,
          top: 10,
          color: colors.LIGHTGREY.DEFAULT,
        }}
        size={30}
      />
      <Card.Cover source={images.trendingProduct} style={{height: '55%'}} />
      <Card.Content>
        <Paragraph style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
          Heavy
        </Paragraph>
        <Paragraph>product number 8</Paragraph>
        <Paragraph style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
          PKR 500
        </Paragraph>
      </Card.Content>
      <TouchableOpacity
        style={{
          borderColor: colors.ORANGE.DEFAULT,
          width: '100%',
          borderWidth: 1,
          marginTop: 5,
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
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
      }}>
      <RenderHeader />
      <Text
        style={{padding: 10, borderRadius: 1, elevation: 1, marginBottom: 10}}>
        Home <Feather name="chevron-right" size={15} /> Product number 8
      </Text>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <Image
          source={images.trendingProduct}
          style={{height: height * 0.5, width: '100%'}}
          resizeMode="contain"
        />
        <Image
          source={images.trendingProduct}
          style={{
            height: height * 0.15,
            width: width * 0.2,
            marginLeft: width * 0.06,
          }}
          resizeMode="contain"
        />
        <Text style={{fontSize: 18, marginLeft: width * 0.06}}>
          Product number 8
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: width * 0.06,
            marginVertical: 8,
          }}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={20}
            ratingColor={colors.ORANGE.DEFAULT}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            marginLeft: width * 0.06,
            color: colors.ORANGE.DEFAULT,
          }}>
          PKR 500
        </Text>
        <Text
          style={{fontSize: 16, marginLeft: width * 0.06, marginVertical: 5}}>
          Description Goes Here...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: width * 0.06,
            marginVertical: 8,
            alignItems: 'center',
          }}>
          <Text>Qty</Text>
          <Text
            style={{
              borderWidth: 1,
              width: 100,
              height: 30,
              marginLeft: width * 0.16,
              fontSize: 18,
              textAlign: 'center',
              paddingTop: 2,
            }}>
            1
          </Text>
        </View>
        <Button
          icon="cart"
          // mode="contained"
          onPress={() => console.log('Pressed')}
          style={{
            borderWidth: 1,
            borderColor: colors.ORANGE.DEFAULT,
            width: '50%',
            marginLeft: width * 0.06,
            backgroundColor: 'lightgray',
            paddingHorizontal: 5,
            marginBottom: '10%',
          }}
          color="black">
          Add to Cart
        </Button>
        <Divider style={{height: 2}} />
        <Text
          style={{fontSize: 14, marginLeft: width * 0.02, marginVertical: 15}}>
          Category: Clothing, Digital Camera, Bed Room 1,
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: width * 0.02,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 14}}>Share:</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '40%',
              justifyContent: 'space-evenly',
            }}>
            <Image source={images.fb} style={{height: 18, width: 18}} />
            <Image source={images.twitter} style={{height: 20, width: 20}} />
            <Image source={images.insta} style={{height: 20, width: 20}} />
            <Image source={images.youtube} style={{height: 20, width: 20}} />
          </View>
        </View>
        <Text style={{fontSize: 18, marginVertical: 15, textAlign: 'center',textTransform:'capitalize'}}>
          you may also like
        </Text>
      </ScrollView>
    </View>
  );
};

export default Login;
