import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';


import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import AuthStack from '../components/tandem/authstack';
import Register from '../components/tandem/register';
import LoggedInStack from '../components/tandem/loggedinstack';
import AppNavigator from '../components/appNavigator.js';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { signIn, signOut, getToken } from './util';
import gql from 'graphql-tag';
import Constants from '../components/tandem/Constants';
import {NetInfo} from 'react-native';
import Probe from '../components/tandem/probe';
import Profile from '../components/tandem/profile';






/*
client.writeQuery({
  query,
  data
});

try {
  const { todo } =  client.readQuery({query});
}


catch (e) {
  console.log(e);
  console.log("Not updating store - Projects not loaded yet");
}
*/



/*
await this.props.mutate({
  update: (client, { data: { createChat } }) => {
    const data = client.readQuery({ query: ChatQuery }) //this throws error Error: Can't find field ChatRoom({}) on object (ROOT_QUERY) 
    data.ChatRoom.chats.push(createChat)
    client.writeQuery({ query: ChatQuery, data })
  },

})
*/


// data.users.push({
//    id: '6',
//   username: 'new user',
//   email: 'newEmail',
//   password: '456'
// });


// newUser samo za proba, inace treba od samo sto logged-in user


/*
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://192.168.178.21:4000/graphql' }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id,
  }),
  addTypename: true
});
*/

const newUser = {
  user:{  id: '6',
  username: 'new user',
  email: 'newEmail',
  password: '456',
  __typename: 'User',}

};



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

  // handleEmailChange = (loggedIn = false, jwt) => {
    
  //       console.log(" vo handleEmailChange")
  //       this.setState({ loggedIn });
  //       if (loggedIn) {
  //         console.log(" vo loggedIn")
  //         //vo signIn parametar bese jwt
  //         signIn( jwt);
  //       } else {
  //         console.log(" vo signOut")
  //         signOut();
  //       }
  //     };
    


  // ova bese vnatre vo apolloprovider prvo:<AppNavigator />
  // <Probe/>
  render() {

    NetInfo.isConnected.fetch().then(isConnected => {
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
    });

    
   
    /*
    <LoggedInStack></LoggedInStack>
      */ 

      // Query mora da e loaded za da funkconira i na offline...
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




