import './App.css';
import { ApolloProvider } from "@apollo/react-hooks"
import AppRouter from "./route/appRouter"
import client from "./apolloSetup"
import React from "react"

function App() {
  return (
    <ApolloProvider client={client }>
      <div className="App">
        <AppRouter />
      </div>
    </ApolloProvider>
  );
}

export default App;
