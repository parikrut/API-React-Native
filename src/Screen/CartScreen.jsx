import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, ScrollView, ActivityIndicator } from 'react-native';
import styles from './CartScreen.Styles';
import ItemDetailModal from '../Components/ItemDetailModal/ItemDetailModal.Component'
import Colors from '../utills/Colors'
import Header from '../Components/HeaderBasic/HeaderBasic.component'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'

console.log("Cart Screen")

const CartScreen = ({ navigation: { navigate } }) => {

  const [allProducts, setAllProducts] = useState([]);
  const [isItemDetailVisible, setIsItemDetailVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const getData = async () => {
      await axios.get('https://fakestoreapi.com/products')
        .then(res => {
          console.log(res.data)
          setAllProducts(res.data)
        })
        .catch(err => {
          console.log(err)
        });
    }
    getData()
  }, [])

  const renderProduct = ({ item, index }) => {
    const price = item.price
    return (
      <TouchableOpacity style={styles.productContainerAll}
        onPress={() => { setSelectedItem({ ...item, price }); setIsItemDetailVisible(!isItemDetailVisible) }}>
        <View>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text numberOfLines={1} style={styles.productTitle}>{item.title}</Text>
        </View>
        <View style={styles.priceConainer}>
          <Text style={styles.priceLableText}>Price:</Text>
          <Text style={styles.priceText}>{item.price.toFixed(0)}</Text>
        </View>
        <View style={styles.priceConainer}>
          <Text style={styles.priceLableText}>Description:</Text>
          <Text style={styles.priceText}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <SafeAreaView backgroundColor={Colors.darkPink} />
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.darkPink} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Header title="Shop Now" />
          <ScrollView showsVerticalScrollIndicator={true}>
            <FlatList
              data={allProducts}
              renderItem={renderProduct}
              numColumns={3}
            />
          </ScrollView>
          <ItemDetailModal isVisible={isItemDetailVisible} item={selectedItem}
            onRequestClose={() => setIsItemDetailVisible(!isItemDetailVisible)} />
        </View>
      </SafeAreaView>
    </>
  )
}
export default CartScreen
