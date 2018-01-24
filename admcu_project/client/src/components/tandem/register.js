import React from 'react';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';
import {  NetInfo,Alert } from 'react-native';
import { graphql } from "react-apollo";
import gql from 'graphql-tag';
import { SignupMutation } from '../query/query'; 
import PropTypes from 'prop-types';
import LoginNew from './login_new';



class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      confirmPassword: '',
      confirmPasswordError: false,
      username: '',
      usernameError: false
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
    const {username, email, password, confirmPassword } = this.state;

    console.log('username e ', username);
    console.log('email e ', email);

    if (username.length === 0) {
      return this.setState({ usernameError: true });
    }
    this.setState({ usernameError: false });

    if (email.length === 0) {
      return this.setState({ emailError: true });
    }
    this.setState({ emailError: false });

    if (password.length === 0) {
      return this.setState({ passwordError: true });
    }
    this.setState({ passwordError: false });

    if (confirmPassword.length === 0) {
      return this.setState({ confirmPasswordError: true });
    }
    this.setState({ confirmPasswordError: false });

    if (password !== confirmPassword) {
      return this.setState({ passwordError: true, confirmPasswordError: true });
    }
    this.setState({ passwordError: false, confirmPasswordError: false });

    //return this.props.screenProps.changeLoginState(true);
    this.props
    .signup(email, username, password)
    .then(({ data }) => {

      Alert.alert(
        'Registration Completed',
        'You have registered successfully. Log in to start.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () =>  console.log('Ok Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
      )

     //  return this.props.screenProps.changeLoginState(true);
    })
    .catch(e => {
      // If the error message contains email or password we'll assume that's the error.
      if (/email/i.test(e.message)) {
        this.setState({ emailError: true });
      }
      if (/password/i.test(e.message)) {
        this.setState({ passwordError: true });
      }
      if (/username/i.test(e.message)) {
        this.setState({ usernameError: true });
      }
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { usernameError, emailError, passwordError, confirmPasswordError } = this.state;


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

    /*
    if(this.props.data.loading){
      console.log("schnu")
      return(<View><Text>Loading...</Text></View>)
  }

  if(this.props.data.error){
      console.log(this.props.data.error)
      return(<View><Text>An unexpected error occured</Text></View>)
  }
*/ 

    return (
      <Container>
        <Content>
          <Form>
          <Item error={usernameError}>
              <Input
                placeholder="Username"
                onChangeText={value => this.handleInputChange('username', value)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
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
            <Item last error={confirmPasswordError}>
              <Input
                placeholder="Confirm Password"
                onChangeText={value => this.handleInputChange('confirmPassword', value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </Item>
          </Form>
          <Button full onPress={this.handleSubmit}>
            <Text>SIGN UP  </Text>
          </Button>
          <Button full transparent onPress={() => navigate('LoginNew')}>
            <Text>GO TO LOGIN  </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const SignupMutationWithdata = graphql(SignupMutation,
  {
    props: ({ mutate }) => ({
      signup: (username, email, password) => mutate({ variables: { username, email, password } }),
    }),
  },
)
(Register)
export default SignupMutationWithdata
