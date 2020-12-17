import './App.css';
import { ApolloProvider } from "@apollo/react-hooks"
import AppRouter from "./route/appRouter"
import Header from './ui/header'
import client from "./apolloSetup"
import React from "react"

function App() {
  return (
    <ApolloProvider client={client }>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </ApolloProvider>
  );
}

export default App;
