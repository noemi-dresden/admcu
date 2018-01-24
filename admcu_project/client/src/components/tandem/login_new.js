import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, NetInfo,Alert } from 'react-native';
import { Container,  Content, Form, Item, Input } from 'native-base';

import { graphql } from 'react-apollo'; // 2.0.0
import gql from 'graphql-tag'; // 2.5.0

import { LoginMutation } from '../query/query'; 
import { ProbeQuery } from '../query/query'; 
import Constants from './Constants'; 
import Register from './register';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false
    };
  }



  handleInputChange = (field, value) => {
   
    const newState = {
      ...this.state,
      [field]: value,
    };
    this.setState(newState); 
  };

  handleSubmit = () => {

    const { email, password } = this.state;
    console.log('state email  ', email);

    if (email.length === 0) {
      return this.setState({ emailError: true });
    }
    this.setState({ emailError: false });

    if (password.length === 0) {
      return this.setState({ passwordError: true });
    }
    this.setState({ passwordError: false });   
    console.log("email is " + this.state.email)

    //console.log('data loading e ' + data.loading)
    this.props
    .login(email, password)
    .then(({ data }) => {
    
      console.log('got data', data);
      return this.props.screenProps.changeLoginState(true);
    })
    .catch(e => {
      // If the error message contains email or password we'll assume that's the error.
      if (/email/i.test(e.message)) {
        this.setState({ emailError: true });
      }
      if (/password/i.test(e.message)) {
        this.setState({ passwordError: true });
      }
    });

    const newUser = {
      user:{  id: '6',
      username: 'new user',
      email: 'newEmail',
      password: '456',
      __typename: 'User',}
    
    };
   
  };
  

  render() {
    const { emailError, passwordError } = this.state;
     const { navigate } = this.props.navigation;


    NetInfo.isConnected.fetch().then(isConnected => {
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
      if((isConnected ? 'online' : 'offline') == 'offline'){
        Alert.alert(
          'Action not possible',
          'You are offline, try again when connections are available',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () =>  console.log('Ok Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
        )
      }
      
      
    });

    function handleFirstConnectivityChange(isConnected) {
      console.log('Then, is ' + (isConnected ? 'online' : 'offline'));

   

      NetInfo.isConnected.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
    }

    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );


    return (
      <View style={styles.container}>
   
      <Form>
            <Item error={emailError}>
              <Input
                placeholder="Email"
                onChangeText={value => this.handleInputChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
            <Item error={passwordError}>
              <Input
                placeholder="Password"
                onChangeText={value => this.handleInputChange('password', value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </Item>
          </Form>
          <Text></Text>
      <Button
        title="Log in"
        onPress={this.handleSubmit}
      />
      <Text/>
       <Button
       title="Don't have an account? Click here to sign up!"
        onPress={() =>
          navigate('Register')// do Register bese vaka , {email: this.state.email}          
        }
      />
    </View>     
    );
  }
}

// kako tret parametar bese , {name: 'LoginMutation'}
const LoginMutationWithdata = graphql( LoginMutation, { 
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } }),
  })
}) (Login)
export default LoginMutationWithdata



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});