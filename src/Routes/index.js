import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen from '../Screen/DetailScreen'
import CartScreen from '../Screen/CartScreen'

const Stack = createStackNavigator();
class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="CartScreen" headerMode="none">                    
                    <Stack.Screen name="CartScreen" component={CartScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Routes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
