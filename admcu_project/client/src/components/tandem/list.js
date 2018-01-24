import React , { Component } from 'react';
//import {Image, StyleSheet, View, NetInfo, ScrollView} from 'react-native';
import {
  FlatList,
  StyleSheet,
  NetInfo, Image,
  ActivityIndicator,
  View,
} from 'react-native';
import { Container, Content,Badge, Card, Fab, CardItem,List,ListItem, Left, Right, Body,Thumbnail , Text, Icon, Button} from 'native-base';
import {TandemQuery} from '../query/query';
import { graphql, compose} from 'react-apollo';
import MapView from 'react-native-maps';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import gql from 'graphql-tag';

/*
const TandemsWithData = graphql(
  gql`
  query TandemQuery ($latitude: Float, $longitude: Float, $offer: String, $search:String, $limit: Int, $skip: Int ) {
      tandems (latitude: $latitude, longitude: $longitude, offer:$offer, search: $search, limit: $limit, skip: $skip){
          id
          user
          image
          languages{
            offer
            search
          }
          location
      }
  }
  `,
  {
    options: {
      notifyOnNetworkStatusChange: true,
      variables: { offset: 0, pageSize: 2 },
    },
  }
)(ListScreen);*/

//how to get this data dynamicaly
const user = {
  latitude: 51.041700,
  longitude: 13.643200,
  offer: "german",
  search:"arabic",
  limit: 2,
  skip: 0
}

class ListScreen extends Component {

  constructor(props){
        super(props);
        this.state = {
          userPosition: null,
          lastPosition: null ,
          region:{
            latitude: user.latitude,
            longitude: user.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          tandems: [], 
          myText:"hallo",
          gestureName: 'none',
          backgroundColor:""    
        }
        this.getConnectionInfo()
        this.getUserPosition()
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Tandem near Me',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search-outline" style={{color: tintColor}}/>
     )
  });
 
  
  onSwipeDown(gestureState) {
    user.skip = 3
    alert(user.skip)
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_DOWN} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_DOWN:
        this.setState({backgroundColor: '#fff'});
        break;
    }
  }

  getConnectionInfo = () => {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.setState({connection: connectionInfo.type})
      this.setState({connectionType: connectionInfo.effectiveType})
      });
  }

  getUserPosition = () => {
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

  render = () => {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
     const { navigate } = this.props.navigation;
     var tandems = this.props.TandemQuery.tandems
     var loading = this.props.TandemQuery.loading
     var error = this.props.TandemQuery.error

     var data = this.props.TandemQuery

        if (this.state.connectionType == '4g'){
       if (loading) {
            return <Text>Loading ...</Text>;
          }
          if (error) {
            return <Content><Text>{error.message}</Text></Content>;
          }
          return (
              <Content>
              <GestureRecognizer
                  onSwipeDown={(state) => this.onSwipeDown(state)}
                  config={config}
              >
                <List>
                 {tandems.map(tandem => {
                      return (
                        <Card key={tandem.id} >
                            <CardItem>
                                <Left>
                                  <Body>
                                    <Text>{tandem.user}</Text>
                                    <Text note>Altnossener Str 24.a</Text>
                                    <Text note>0171-8050083</Text>
                                  </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                            <Left><Badge warning><Text>offer</Text></Badge></Left>
                            <Right><Badge warning><Text>search</Text></Badge></Right>
                            </CardItem>
                            <CardItem cardBody>
                            <Left>
                              <List>
                              {tandem.languages.offer.map((o, i) => {
                                return(
                                  <ListItem key={i}><Text style={{fontSize: 10}}>{o}</Text></ListItem> 
                              )
                              })}
                              </List>
                            </Left>
                            <Right>
                              <List>
                              {tandem.languages.search.map((s, i) => {
                                return(
                                  <ListItem key={i}><Text style={{fontSize: 10}}>{s}</Text></ListItem>
                                )
                              })}
                              </List>
                            </Right>
                            </CardItem>
                        </Card>
                      )     
                 })}
                 
                </List>
                </GestureRecognizer>
                <View style={{ flex: 1 , height:100}}>
                <Fab
                  active={true}
                  direction=""
                  containerStyle={{ }}
                  style={{ backgroundColor: '#5067FF', position: 'absolute' }}
                  position="bottomRight"
                  onPress={() => navigate('card', { tandems: this.props.TandemQuery.tandems })}>
                  <Icon name="ios-map-outline" />
                </Fab>
               
                </View>        
              </Content>
          ); 

      }
        else{
          if (loading) {
            return <Text>Loading ...</Text>;
          }
          if (error) {
            return <Content><Text>{error.message}</Text></Content>;
          }
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
                       <MapView.Callout>
                        <View style={styles.callout}>
                          <Card>
                            <CardItem>
                                <Left>
                                  <Body>
                                    <Text>{tandem.user}</Text>
                                    <Text note>Altnossener Str 24.a</Text>
                                    <Text note>0171-8050083</Text>
                                  </Body>
                                </Left>
                            </CardItem>
                          </Card>
                        </View>
                      </MapView.Callout>
                      </MapView.Marker>
                    );
              })}
              </MapView>
            </View>
          );
        }   
  }

}


const ListWithData = graphql(TandemQuery, { name: 'TandemQuery',
  options: {variables: {latitude: user.latitude, longitude: user.longitude ,offer:user.offer, search:user.search, limit: user.limit, skip:user.skip}}
})(ListScreen);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    borderRadius: 4,
  }
});

export default ListWithData; 
