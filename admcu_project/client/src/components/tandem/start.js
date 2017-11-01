import React , { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Icon, Title,Button, Body, StyleProvider} from 'native-base';


export default class SartScreen extends Component {

 constructor(props){
      super(props);
}

 static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Find',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search-outline" style={{color: tintColor}}/>
     )
  });

 
 render() {
     const { navigate } = this.props.navigation;
        return (
           <Container>
            
            <Text>Start something here and here</Text>
          </Container>
        );
    }
}




