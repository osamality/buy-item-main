import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { images, colors } from './constant';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import LoginModal from './AuthModal';
import { BASEURL, ENDPOINTS } from '../config/Config';

const Header = () => {
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
          <AntDesign name="shoppingcart" size={25} />
          <Text>cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const imageSlider = [
  images.slider1,
  images.slider2,
  images.slider3,
  images.slider4,
];
const Slider = (props) => {
  const slider = props.slider
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        // index={0}
        showPagination
        autoplayLoop
        disableGesture={true}
        autoplayLoopKeepAnimation={true}
        paginationActiveColor={colors.LIGHTGREY.DEFAULT}
        paginationDefaultColor={colors.TRANSPARENT}>
        {slider.map((item, key) => (
          <View style={[styles.child]} key={item.slider_id}>
            <Image source={{ uri: `https://thecodeditors.com/test/single_vendor/admin/slider_images/${item.slider_image}` }} style={{ position: 'absolute', height: 190, width: '100%' }} />
            <Text style={{ fontSize: 18, color: 'black', marginLeft: '5%' }}>
              New Arrivals
            </Text>
            <Text style={styles.text}>{item.slider_title}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('WishList')}
              style={{
                backgroundColor: colors.ORANGE.DEFAULT,
                width: '45%',
                marginLeft: '5%',
                padding: 10,
                marginTop: 10,
              }}>
              <Text style={{ fontSize: 18, color: 'black' }}>
                Discover Now <AntDesign name="arrowright" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};
const Slider1 = (props) => {
  let navigation = useNavigation();
  const products = props.products;
  return (
    <View style={styles.container2}>
      {/* <SwiperFlatList
        // autoplay
        // autoplayDelay={3}
        index={0}
        showPagination
        autoplayLoop
        disableGesture={false}
        // autoplayLoopKeepAnimation={true}

        paginationActiveColor={colors.LIGHTGREY.DEFAULT}
        paginationDefaultColor={colors.TRANSPARENT}>
        {imageSlider.map((item, key) => (
          <View
            style={{
              width: width * 0.48,
              justifyContent: 'center',
              height: 265,
              marginRight: 10,
            }}
            key={key}>
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
            <Card.Cover
              source={images.trendingProduct}
              style={{height: height*0.45, width: '100%'}}
            />
            <View style={{padding:2}}>
              <Text
                style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
                Heavy
              </Text>
              <Text>product number 8</Text>
              <Text style={{fontSize: 14, color: colors.ORANGE.DEFAULT}}>
                PKR 500
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderColor: colors.ORANGE.DEFAULT,
                width: '100%',
                borderWidth: 1,
                marginTop: 5,
                marginBottom: 10,
                height: 25,
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
            <AntDesign
              name="heart"
              style={{
                position: 'absolute',
                zIndex: 12,
                right: 10,
                top: 10,
                color: 'red',
              }}
              size={30}
            />
            <Card.Cover
              source={images.trendingProduct}
              style={{height: '51%'}}
            />
            <Card.Content>
              <Paragraph
                style={{fontSize: 12, color: colors.LIGHTGREY.DEFAULT}}>
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
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.ORANGE.DEFAULT,
                  textAlign: 'center',
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </SwiperFlatList> */}
      <SwiperFlatList
        paginationActiveColor={'brown'}
        paginationDefaultColor={colors.LIGHTGREY.DEFAULT}
        index={0}
        showPagination
        paginationStyleItem={{
          marginTop: 30
        }}
        paginationStyleItemActive={{
          height: 10, width: 10, marginHorizontal: 6,
        }}
        paginationStyleItemInactive={{
          height: 7, width: 7, marginHorizontal: 4,
        }}
        data={products}
        renderItem={({ item, key }) => (
          <View
            style={{
              width: width * 0.45,
              justifyContent: 'center',
              height: 265,
              marginRight: 10,
              // backgroundColor: 'red'
            }}
            key={item.pro_id}
          >
            <AntDesign
              name="hearto"
              style={{
                zIndex: 20,
                position: 'absolute',
                right: 10,
                top: 10,
                color: colors.LIGHTGREY.DEFAULT,
              }}
              size={30}
            />
            <Card.Cover source={{ uri: `https://thecodeditors.com/test/multi_vendor/admin/plugin/product_images/${item.image_name}` }} style={{ zIndex: 10, height: '55%', margin: '1%', borderRadius: 2 }} />
            <Card.Content>
              <Paragraph style={{ fontSize: 12, color: colors.LIGHTGREY.DEFAULT }}>
                {item.pro_des}
              </Paragraph>
              <Paragraph>{item.pro_name}</Paragraph>
              <Paragraph style={{ fontSize: 14, color: colors.ORANGE.DEFAULT }}>
                {item.pro_price}
              </Paragraph>
            </Card.Content>
            <TouchableOpacity
              style={{
                borderColor: colors.ORANGE.DEFAULT,
                width: '98%',
                borderWidth: 1,
                marginTop: 5,
                borderRadius: 3,
                alignSelf: 'center'
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
          </View>
        )}
      />
    </View>
  );
};

const SliderTrending = () => {
  return (
    <View
      style={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        height: '30%',
      }}>
      <Card style={{ width: '49%', marginRight: '2%' }}>
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
        <Card.Cover source={images.trendingProduct} style={{ height: '51%' }} />
        <Card.Content>
          <Paragraph style={{ fontSize: 12, color: colors.LIGHTGREY.DEFAULT }}>
            Heavy
          </Paragraph>
          <Paragraph>product number 8</Paragraph>
          <Paragraph style={{ fontSize: 14, color: colors.ORANGE.DEFAULT }}>
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
      <Card style={{ width: '49%' }}>
        <AntDesign
          name="heart"
          style={{
            position: 'absolute',
            zIndex: 12,
            right: 10,
            top: 10,
            color: 'red',
          }}
          size={30}
        />
        <Card.Cover source={images.trendingProduct} style={{ height: '51%' }} />
        <Card.Content>
          <Paragraph style={{ fontSize: 12, color: colors.LIGHTGREY.DEFAULT }}>
            Heavy
          </Paragraph>
          <Paragraph>product number 8</Paragraph>
          <Paragraph style={{ fontSize: 14, color: colors.ORANGE.DEFAULT }}>
            PKR 500
          </Paragraph>
        </Card.Content>
        <TouchableOpacity
          style={{
            borderColor: colors.ORANGE.DEFAULT,
            width: '100%',
            borderWidth: 1,
            marginTop: 5,
          }}>
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
    </View>
  );
};
const App = () => {
  let navigation = useNavigation();
  const [shops, setShops] = useState([])
  const [products, setProducts] = useState([])
  const [slider, setSlider] = useState([])
  const [recommendation, setRecommendation] = useState([])

  useEffect(async () => {

    await axios.get(BASEURL + ENDPOINTS.SHOPNAME)
      .then(res => {
        const nameList = res.data.Data;
        setShops(nameList);
      })

    await axios.get(BASEURL + ENDPOINTS.SLIDER_IMAGES)
      .then(res => {
        const proList = res.data.Data;
        setSlider(proList);
      })

    await axios.get(BASEURL + ENDPOINTS.RECENT_PRODUCTS)
      .then(res => {
        const proList = res.data.Data;
        setProducts(proList);
      })

    await axios.get(BASEURL + ENDPOINTS.BESTSELLER)
      .then(res => {
        const proList = res.data.Data;
        setRecommendation(proList);
      })

  }, []);

  let renderItem = (item) => {
    // let navigation = useNavigation();

    return (

      <Card key={item.item.pro_id} style={{ width: '48%', margin: '1%', padding: '0.8%', borderRadius: 2 }}>
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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LoginModal />
      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <Header />

        <FlatList
          ListHeaderComponent={
            <>
              <Slider slider={slider} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
                Shops
              </Text>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  // alignItems: 'center',
                }}>
                {shops.map((item, key) => (
                  <React.Fragment key={key}>
                    <Image
                      source={images.logoAsiaTv}
                      style={{ height: 30, width: 40 }}
                    />
                    <Text style={{ color: colors.ORANGE.DEFAULT, fontSize: 14 }}>
                      {item.vendor_company_name}
                    </Text>
                  </React.Fragment>
                ))}
              </ScrollView>

              <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 10 }}>
                Trending Today
              </Text>
              <Slider1 products={recommendation} />

              <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 10, marginTop: '5%' }}>
                Electronic
            </Text>
            </>

          }
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(key) => key.pro_id}
          renderItem={(item) => renderItem(item)}
          numColumns={2}
        />
      </View>
    </>
  );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { height: 200, backgroundColor: 'white' },
  container2: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: 20, marginLeft: '5%', fontWeight: 'bold', color: 'white' },
});

export default App;
