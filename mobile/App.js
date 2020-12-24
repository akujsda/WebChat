/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Auth } from "./src/auth/auth"
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./routes/routes"
const App: () => React$Node = () => {
  return (
    <>
      <Routes />
    </>
  );
};


export default App;
