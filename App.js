import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import store from './src/Redux/index'
import Routes from './src/Routes/index'
import CartScreen from './src/Screen/CartScreen'
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

