import React, { } from 'react';
import {
    View, SafeAreaView, StatusBar, FlatList, Text,
    Image
} from 'react-native';
import styles from './DetailStyle';
import Button from '../Components/Button/Button.component';
import Colors from '../utills/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';
import { incrementQty, decrementQty, removeItemFromCart } from '../Redux/Actions/MyCart';
import { height } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';


export default function DetailScreen() {
    const dispatch = useDispatch()
    const myCart = useSelector(state => state.MyCart.myCart)
    const navigation = useNavigation();
    const renderItem = ({ item, index }) => {
        let price = item.price

        return (
            <View style={styles.itemMainContainer}>
                <Image
                    style={styles.itemImage}
                    source={{ uri: item.image }} />
                <View style={styles.dataContainer}>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                    <Text style={styles.inStock}>Description: {item.description}</Text>
                    <View style={styles.priceQuantityContainer}>
                        <View style={styles.quantityContainer}>
                            <AntDesign name={"minussquare"} color={Colors.primaryPink} size={height(3)}
                                onPress={() => { dispatch(decrementQty(item)) }} />
                            <Text style={styles.quantity}>qty: {item.quantity}</Text>
                            <AntDesign name={"plussquare"} color={Colors.primaryPink} size={height(3)}
                                onPress={() => { dispatch(incrementQty(item)) }} />
                            <Text style={styles.quantity}></Text>
                            <AntDesign name={"DeleteOutlined"} color={Colors.primaryPink} size={height(3)}
                                onPress={() => { dispatch(removeItemFromCart(item)) }} />
                        </View>
                        <View>
                            <Text style={styles.title}>Price: {(item.quantity * price).toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <>
            <SafeAreaView backgroundColor={Colors.darkPink} />
            <StatusBar barStyle={"light-content"} backgroundColor={Colors.darkPink} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={myCart}
                        renderItem={renderItem}
                        ListEmptyComponent={() => (
                            <View style={styles.listEmptyContainer}>
                                <Text style={styles.emptyText}>My Cart is Empty!</Text>
                            </View>
                        )}
                    />
                    <Button
                        onPress={() => navigation.navigate("CartScreen")}
                        title="Go Back"
                        containerStyle={styles.buttonContainer} />
                </View>
            </SafeAreaView>
        </>
    );
};