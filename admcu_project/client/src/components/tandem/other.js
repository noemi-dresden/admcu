import React , { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Icon, Title,Button, Body, StyleProvider} from 'native-base';


export default class OtherScreen extends Component {

 constructor(props){
      super(props);
      this.state = {
        userPosition: null,
        lastPosition: null
      }
}

 static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Other',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-contacts-outline" style={{color: tintColor}}/>
     )
  });

 getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      var userPosition = JSON.stringify(position);
      this.setState({userPosition});
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true,timeout: 20000,maximumAge: 1000 }
  );
  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lastPosition = JSON.stringify(position);
    this.setState({lastPosition});
  });
 }
 
 render() {
     const { navigate } = this.props.navigation;
        return (
           <View>
            <Text>Something else {this.state.userPosition}</Text>
            <Button onPress = {this.getUserLocation} ><Text>get location</Text></Button>
          </View>
        );
    }
}




