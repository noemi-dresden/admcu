import React , { Component } from 'react';
import {NetInfo , Image, StyleSheet, View, Picker} from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Icon, Title,Button, Body, StyleProvider} from 'native-base';


export default class StartScreen extends Component {

 constructor(props){
      super(props);
      this.state = {
        userPosition: null,
        lastPosition: null,
        connection: null,
        language_offer: "english",
        language_search: "french"
      }
     
      this.getConnectionInfo()
      this.getUserLocation()
}

 static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Start',
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
  );
  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lastPosition = JSON.stringify(position);
    this.setState({lastPosition});
  });
 }
 
 getConnectionInfo = () => {
  NetInfo.getConnectionInfo().then((connectionInfo) => {
    this.setState({connection: connectionInfo.type})
    this.setState({connectionType: connectionInfo.effectiveType})
    });
 }

 getLanguages() {
  const formValues = this.formGenerator.getValues();
  console.log('FORM VALUES', formValues);
}

 render() {
     const { navigate } = this.props.navigation;
     return (
      <Content style={{backgroundColor:'white'}}>
      <Text>You can offer </Text>
       <Picker
       selectedValue={this.state.language_offer}
       onValueChange={language_offer => this.setState({ language_offer })}
       style={{ width: 160 }}
       mode="dropdown">
       <Picker.Item label="german" value="german" />
       <Picker.Item label="arabic" value="arabic" />
       <Picker.Item label="spanish" value="spanish" />
       <Picker.Item label="english" value="english" />
       <Picker.Item label="french" value="french" />
        </Picker>
        <Text>You want to learn </Text>
       <Picker
       selectedValue={this.state.language_search}
       onValueChange={language_search => this.setState({ language_search })}
       style={{ width: 160 }}
       mode="dropdown">
       <Picker.Item label="german" value="german" />
       <Picker.Item label="arabic" value="arabic" />
       <Picker.Item label="spanish" value="spanish" />
       <Picker.Item label="english" value="english" />
        </Picker>
        
       <Button onPress={() =>
           navigate('Tandem', {latitude: this.state.userPosition.latitude, longitude: this.state.userPosition.longitude, offer: this.state.language_offer, search: this.state.language_search})         
         }>
            <Text>search </Text>
          </Button>
       </Content>
      );
    }
}




