import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from '../components/appNavigator';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { TandemQuery } from '../components/query/query';
import { from } from 'apollo-link';

import Constants from '../components/tandem/Constants';
import LoggedInStack from '../components/tandem/loggedinstack';
import AuthStack from '../components/tandem/authstack';


export default class Tandem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: ''
    };
  }

  handleChangeLoginState = (loggedIn = false, jwt) => {

    console.log(" vo chngLoginState")
    this.setState({ loggedIn });
    if (loggedIn) {
      console.log(" vo loggedIn")
      //vo signIn parametar bese jwt
      signIn( jwt);
    } else {
      console.log(" vo signOut")
      signOut();
    }
  };

  render() {
    return (
      <ApolloProvider client = {Constants.client}>
        {
        this.state.loggedIn ?
          <LoggedInStack screenProps={{ changeLoginState: this.handleChangeLoginState, email:this.state.email}} /> :
          <AuthStack screenProps={{ changeLoginState: this.handleChangeLoginState, email: this.state.email}} />
      }
      </ApolloProvider>
    );
  }
}