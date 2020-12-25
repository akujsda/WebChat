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
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import client from "./src/apolloSetup"
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'


const App: () => React$Node = () => {


  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Routes />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};


export default App;
