import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from '../components/appNavigator';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://192.168.178.45:4000/graphql' }),
  cache: new InMemoryCache()
});


export default class Tandem extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}