import React from 'react';
import { View, Text, Platform } from "react-native";
import styles from './HeaderBasic.Styles';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Component = ({ title }) => {
  const counter = useSelector(state => state.MyCart.myCart.length)
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Text style={styles.headText}>{title}</Text>
        <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        <View style={{
            position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{counter}</Text>
        </View>
        {/* <Icon onPress={() => navigation.navigate('Detail')} name="ios-cart" size={30} /> */}
        <AntDesign onPress={() => navigation.navigate("Detail")} name="shoppingcart" size={30} />
      </View>
      </View>
  );
};

export default Component;
