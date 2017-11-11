import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from '../components/appNavigator';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink(), // link: new HttpLink({ uri: 'https://api.example.com/graphql' }),
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