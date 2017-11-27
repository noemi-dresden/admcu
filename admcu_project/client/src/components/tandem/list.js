import React , { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Container, Content, Card, CardItem,List, Left, Right, Body, Text, Icon, Button} from 'native-base';
import {TandemQuery} from '../query/query';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';



class ListScreen extends Component {

  constructor(props){
        super(props);
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'SEARCH',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search-outline" style={{color: tintColor}}/>
     )
  });
 
  render() {
     const { navigate } = this.props.navigation;

        if (this.props.TandemQuery.loading) {
          return <Text>Loading ...</Text>;
        }
        if (this.props.TandemQuery.error) {
          return <Content><Text>{this.props.TandemQuery.error.message}</Text></Content>;
        }

        return (
            <Content scrollEnabled={true}>
              <List>
               {this.props.TandemQuery.tandems.map(tandem => {
                    return (
                      <Card key={tandem.id}>
                          <CardItem >
                            <Body><Text>{tandem.user}</Text></Body>
                          </CardItem>
                      </Card>
                    )     
               })}
              </List>
            </Content>
        );
  }
}

const ListWithData = graphql(TandemQuery, { name: 'TandemQuery',
  options: {variables: {latitude:51.043776, longitude:13.628778,offer:"german", search:"arabic"}}
})(ListScreen);

export default ListWithData; 