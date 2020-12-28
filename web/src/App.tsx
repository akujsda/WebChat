import './App.css';
import { ApolloProvider } from "@apollo/react-hooks"
import AppRouter from "./route/appRouter"
import client from "./apolloSetup"
import React from "react"
import {I18nProvider, LOCALES} from './i18n';

function App() {
  return (
    <ApolloProvider client={client }>
      <I18nProvider locale={LOCALES.ENGLISH}>
      <div className="App">
        <AppRouter />
      </div>
      </I18nProvider>
    </ApolloProvider>
  );
}

export default App;
