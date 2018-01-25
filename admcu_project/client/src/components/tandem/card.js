import React , { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Container,Card,CardItem, Content, ListItem, Text, CheckBox, Header, Left, Icon, Title,Button, Body, StyleProvider, List} from 'native-base';
import MapView from 'react-native-maps';
import { TandemQuery } from '../query/query';
import { graphql } from 'react-apollo';


const Tandems = ({data}) => {
  if(data.loading){
    return <Text>Loading ...</Text>
  }
  if(data.error){
    return <Text>{data.error.message}</Text>
  }
  return(
    <View style ={styles.container}>
     <MapView
       data={data.tandems}
       style={styles.map}
       region = {{
        latitude: 51.041700,
        longitude: 13.643200,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
       }}
       userLocationAnnotationTitle = "You are here"
       >
       {data.tandems.map((tandem) => {
        return(<MapView.Marker  
          key={tandem.id} 
          coordinate={{latitude: tandem.location[0],longitude: tandem.location[1]}}
          title = {tandem.user}
          />
        )
        })}
       </MapView>   
   </View>
  ) 
}


const TandemWithData = graphql(TandemQuery, {
  options: { variables: {latitude:51.041700,longitude:13.643200, offer:"spanish",search:"german", limit:3,  skip:0} },
})(Tandems);


export default class CardScreen extends Component {
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
     const  params = this.props.navigation.state.params

    return (
      <View style ={styles.container}>
        <TandemWithData/>
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

