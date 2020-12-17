import './App.css';
import { ApolloProvider } from '@apollo/client';
import AppRouter from "./route/appRouter"
import Header from './ui/header'

function App({ client }) {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </ApolloProvider>
  );
}

export default App;
