import React, { Component } from 'react';

import AppNavigator from '../components/appNavigator';

import { gql, ApolloProvider, createNetworkInterface, ApolloClient, graphql } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://10.2.56.119:4001/graphql'}),
  dataIdFromObject: o => o.id
})


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}