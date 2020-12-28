import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory'
import Cookies from 'js-cookie';
import { setContext } from 'apollo-link-context';

const wsLink = new WebSocketLink({
  uri: `ws://18.222.35.142:5000/graphql`,
  options: {
    reconnect: true,
    connectionParams: () => ({
      autorization: Cookies.get("token") ? `Bearer ${Cookies.get("token")}` : "",
    }),
  },
});

const httpLink = new HttpLink({
  uri: 'http://18.222.35.142:5000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      autorization: token ? `Bearer ${token}` : "",
    }
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link
});
