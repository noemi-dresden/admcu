import React , { Component } from 'react';
import {Image, StyleSheet, View, Alert} from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Icon, Title,Button, Body, StyleProvider} from 'native-base';
import MapView from 'react-native-maps';
import {NetInfo} from 'react-native';

// shall be get from server
let coordinates = [
  { 
    latlng:{
       latitude: 51.043624,
       longitude: 13.628502
    },
    title: "Anna Müller",
    description: "Spanish/German"
  },
  {
    latlng: {
      latitude: 51.041700,
      longitude: 13.643200
     },
     title: "Anna Müller",
     description: "Spanish/German"
  },
  {
    latlng: {
      latitude: 51.124247,
      longitude: 13.581808
    },
    title: "Anna Müller",
    description: "Spanish/German"
  },
  {
    latlng: {
      latitude: 51.042824,
      longitude: 13.699662
    },
    title: "Anna Müller",
    description: "Spanish/German"
  }
]


export default class CardScreen extends Component {

 constructor(props){
      super(props);
      this.state = {
        region:{
          latitude: 51.050409,
          longitude: 13.737262,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      }
}

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Card',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search-outline" style={{color: tintColor}}/>
     )
  });
 
 render() {
     const { navigate } = this.props.navigation;
     const { region } = this.props;


     NetInfo.isConnected.fetch().then(isConnected => {
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));

      if(isConnected == 'online')
      console.log('is connected is online! smenigo! ')
    });

    function handleFirstConnectivityChange(isConnected) {
      console.log('Then, is ' + (isConnected ? 'online' : 'offline'));

      if((isConnected ? 'online' : 'offline') == 'offline'){

          Alert.alert(
            'Action not possible',
            'You are offline ',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Return to the Matches Overview list', onPress: () =>  navigate('MenuScreen')},
            ],
            { cancelable: false }
          )
        }

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
        <View style ={styles.container}>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
          <MapView
            style={styles.map}
            region = {this.state.region}
            showsUserLocation = {true}
            userLocationAnnotationTitle = "You are here"
            followsUserLocation = {true}
          >
              {coordinates.map(marker => (
                <MapView.Marker
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                  key={marker.latlng.latitude} //change it to id
                />
              ))}
          </MapView>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});