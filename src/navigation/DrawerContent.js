import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  List,
  Switch,
  Searchbar,
  Divider,
} from 'react-native-paper';
import {
  Button,
  Header,
  Content,
  Input,
  Item,
  Icon as NativeIcon,
} from 'native-base';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import IconsF from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../components/constant';
import { images } from '../components/constant';
import { BASEURL, ENDPOINTS } from '../config/Config';

export default function DrawerContent(props) {
  let navigation = props.navigation
  const [isMenu, setMenu] = useState(true);
  const [activeItem, setActiveItem] = useState(1);
  const [activeCategory, setActiveCategory] = useState(1);

  

  return (
    <View style={{ flex: 1, backgroundColor: '#333333' }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity style={{ position: 'relative', left: '90%' }} onPress={() => navigation.closeDrawer()}>
              <Icon name="close" size={20} color="white" />
            </TouchableOpacity>
            <View style={{ marginTop: 15 }}>
              <Content style={{ marginRight: 10 }}>
                <Item regular>
                  <Input placeholder="Search in..." style={{ color: 'white' }} />
                  <Button
                    style={{
                      backgroundColor: colors.ORANGE.DEFAULT,
                      height: '100%',
                    }}>
                    <NativeIcon name="search" type="EvilIcons" style={{}} />
                  </Button>
                </Item>
              </Content>
            </View>
          </View>
          <View style={{ marginTop: 15, width: '100%', flexDirection: 'row' }}>
            <View style={{ marginRight: 10, width: '45%' }}>
              <TouchableOpacity
                style={{
                  borderBottomColor: isMenu ? colors.ORANGE.DEFAULT : 'gray',
                  borderBottomWidth: 3,
                }}
                onPress={() => {
                  setMenu(true);
                }}>
                <Text
                  style={{
                    color: isMenu ? colors.ORANGE.DEFAULT : 'white',
                    paddingBottom: 15,
                    fontSize: 18,
                    paddingLeft: 10,
                  }}>
                  Menu
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginRight: 10, width: '50%' }}>
              <TouchableOpacity
                style={{
                  borderBottomColor: !isMenu ? colors.ORANGE.DEFAULT : 'gray',
                  borderBottomWidth: 3,
                }}
                onPress={() => {
                  setMenu(false);
                }}>
                <Text
                  style={{
                    color: !isMenu ? colors.ORANGE.DEFAULT : 'white',
                    paddingBottom: 15,
                    fontSize: 18,
                  }}>
                  Categories
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {isMenu ? (
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                label="HOME"
                onPress={() => {
                  setActiveItem(1);
                  navigation.navigate('HomeScreen');
                }}
                labelStyle={{
                  color: activeItem == 1 ? colors.ORANGE.DEFAULT : 'white',
                }}
              />
              <Divider style={{ height: 1, backgroundColor: 'gray' }} />
              <DrawerItem
                label="SHOP"
                onPress={() => {
                  setActiveItem(2);
                  navigation.navigate('ProductFilters');
                }}
                labelStyle={{
                  color: activeItem == 2 ? colors.ORANGE.DEFAULT : 'white',
                }}
              />
              <Divider style={{ height: 1, backgroundColor: 'gray' }} />
              <DrawerItem
                labelStyle={{
                  color: activeItem == 3 ? colors.ORANGE.DEFAULT : 'white',
                }}
                label="CART"
                onPress={() => {
                  setActiveItem(3);
                  navigation.navigate('Cart');
                }}
              />
              <Divider style={{ height: 1, backgroundColor: 'gray' }} />
              <DrawerItem
                labelStyle={{
                  color: activeItem == 4 ? colors.ORANGE.DEFAULT : 'white',
                }}
                label="CHECKOUT"
                onPress={() => {
                  setActiveItem(4);
                  navigation.navigate('CheckStatus');
                }}
              />
              <Divider style={{ height: 1, backgroundColor: 'gray' }} />

              <DrawerItem
                labelStyle={{
                  color: activeItem == 5 ? colors.ORANGE.DEFAULT : 'white',
                }}
                label="WISHLIST"
                onPress={() => {
                  setActiveItem(5);
                  navigation.navigate('WishList');
                }}
              />
              <Divider style={{ height: 1, backgroundColor: 'gray' }} />

              <DrawerItem
                labelStyle={{
                  color: activeItem == 6 ? colors.ORANGE.DEFAULT : 'white',
                }}
                label="FAQS"
                onPress={() => {
                  setActiveItem(6);
                }}
              />
              <Divider style={{ height: 1, backgroundColor: 'gray' }} />
              <DrawerItem
                labelStyle={{
                  color: activeItem == 7 ? colors.ORANGE.DEFAULT : 'white',
                }}
                label="LOGIN"
                onPress={() => {
                  setActiveItem(7);
                }}
              />
              <Divider style={{ height: 1, backgroundColor: 'gray' }} />
              <View style={{ marginLeft: '15%', marginTop: 15 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '80%',
                    justifyContent: 'space-evenly',
                  }}>
                  <Image source={images.fb} style={{ height: 25, width: 25 }} />
                  <Image
                    source={images.twitter}
                    style={{ height: 28, width: 28 }}
                  />
                  <Image
                    source={images.insta}
                    style={{ height: 28, width: 28 }}
                  />
                  <Image
                    source={images.youtube}
                    style={{ height: 28, width: 28 }}
                  />
                </View>
              </View>
            </Drawer.Section>
          ) : (
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="laptop"
                      type="Entypo"
                      style={{
                        fontSize: 20,
                        color:
                          activeCategory == 1 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Electronic"
                  onPress={() => {
                    setActiveCategory(1);
                  }}
                  labelStyle={{
                    color: activeCategory == 1 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="sofa"
                      type="MaterialCommunityIcons"
                      style={{
                        fontSize: 20,
                        color:
                          activeCategory == 2 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Furniture"
                  onPress={() => {
                    setActiveCategory(2);
                  }}
                  labelStyle={{
                    color: activeCategory == 2 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="hamburger"
                      type="MaterialCommunityIcons"
                      style={{
                        fontSize: 20,
                        color: activeItem == 3 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Cooking"
                  onPress={() => {
                    setActiveCategory(3);
                  }}
                  labelStyle={{
                    color: activeCategory == 3 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="tshirt-crew"
                      type="MaterialCommunityIcons"
                      style={{
                        fontSize: 20,
                        color: activeItem == 4 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Clothing"
                  onPress={() => {
                    setActiveCategory(4);
                  }}
                  labelStyle={{
                    color: activeCategory == 4 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="kitchen"
                      type="MaterialIcons"
                      style={{
                        fontSize: 20,
                        color: activeItem == 5 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Home Ampliances"
                  onPress={() => {
                    setActiveCategory(5);
                  }}
                  labelStyle={{
                    color: activeCategory == 5 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="heartbeat"
                      type="FontAwesome5"
                      style={{
                        fontSize: 20,
                        color: activeItem == 6 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Healthy &amp; Beauty"
                  onPress={() => {
                    setActiveCategory(6);
                  }}
                  labelStyle={{
                    color: activeCategory == 6 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="shoe-prints"
                      type="FontAwesome5"
                      style={{
                        fontSize: 20,
                        color: activeItem == 7 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Shoes &amp; Boots"
                  onPress={() => {
                    setActiveCategory(7);
                  }}
                  labelStyle={{
                    color: activeCategory == 7 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />

                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="map-signs"
                      type="FontAwesome"
                      style={{
                        fontSize: 20,
                        color: activeItem == 8 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Travel &amp; outdoor"
                  onPress={() => {
                    setActiveCategory(8);
                  }}
                  labelStyle={{
                    color: activeCategory == 8 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="tv"
                      type="FontAwesome"
                      style={{
                        fontSize: 20,
                        color: activeItem == 9 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Tv &amp; Audio"
                  onPress={() => {
                    setActiveCategory(9);
                  }}
                  labelStyle={{
                    color: activeCategory == 9 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />

                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="shopping-bag"
                      type="FontAwesome5"
                      style={{
                        fontSize: 20,
                        color: activeItem == 10 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Backpack &amp; Bag"
                  onPress={() => {
                    setActiveCategory(10);
                  }}
                  labelStyle={{
                    color: activeCategory == 10 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="music"
                      type="FontAwesome5"
                      style={{
                        fontSize: 20,
                        color: activeItem == 11 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Musical Instruments"
                  onPress={() => {
                    setActiveCategory(11);
                  }}
                  labelStyle={{
                    color: activeCategory == 11 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  icon={({ color, size }) => (
                    <NativeIcon
                      name="gift"
                      type="FontAwesome5"
                      style={{
                        fontSize: 20,
                        color: activeItem == 12 ? colors.ORANGE.DEFAULT : 'white',
                      }}
                    />
                  )}
                  label="Gift"
                  onPress={() => {
                    setActiveCategory(12);
                  }}
                  labelStyle={{
                    color: activeCategory == 12 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />
                <DrawerItem
                  label="Heavy"
                  onPress={() => {
                    setActiveCategory(13);
                  }}
                  labelStyle={{
                    color: activeCategory == 13 ? colors.ORANGE.DEFAULT : 'white',
                  }}
                />
                <Divider style={{ height: 1, backgroundColor: 'gray' }} />

                <View style={{ marginLeft: '15%', marginTop: 15 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '80%',
                      justifyContent: 'space-evenly',
                    }}>
                    <Image source={images.fb} style={{ height: 25, width: 25 }} />
                    <Image
                      source={images.twitter}
                      style={{ height: 28, width: 28 }}
                    />
                    <Image
                      source={images.insta}
                      style={{ height: 28, width: 28 }}
                    />
                    <Image
                      source={images.youtube}
                      style={{ height: 28, width: 28 }}
                    />
                  </View>
                </View>
              </Drawer.Section>
            )}
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    // backgroundColor: '#333333',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
