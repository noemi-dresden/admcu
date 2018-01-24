import React , { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Container,Card,CardItem, Content, ListItem, Text, CheckBox, Header, Left, Icon, Title,Button, Body, StyleProvider, List} from 'native-base';
import MapView from 'react-native-maps';


// shall be get from server
let coordinates = [
  { 
    id: 1,
    location: [51.043624, 13.628502],
    title: "Anna Müller",
    description: "Spanish/German"
  },
  {
    id: 2,
     location: [ 51.041700, 13.643200],
     title: "Anna Müller",
     description: "Spanish/German"
  },
  {
    id: 3,
    location: [51.124247, 13.581808],
    title: "Anna Müller",
    description: "Spanish/German"
  },
  { id: 4,
    location: [51.042824,13.699662 ],
    title: "Anna Müller",
    description: "Spanish/German"
  }
]

class CardScreen extends Component {

 
 constructor(props){
      super(props);
      this.state = {
        region:{
          latitude: 51.042645,
          longitude: 13.637351,
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
     const tandems = this.props.navigation.state.params.tandems

    return (
      <View style ={styles.container}>
       {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        <MapView
          style={styles.map}
          region = {this.state.region}
          userLocationAnnotationTitle = "You are here"
        >
        
        {tandems.map((tandem) => {
              return (
                <MapView.Marker  
                      key={tandem.id} 
                      coordinate={{latitude: tandem.location[0],longitude: tandem.location[1]}}
                      title = {tandem.user}
                >
                </MapView.Marker>
              );
        })}
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


export default CardScreen; 
