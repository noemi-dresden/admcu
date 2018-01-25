import React , { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  NetInfo, Image,
  ActivityIndicator,
  View,
} from 'react-native';
import { Container, Content,Badge, Card, Fab, CardItem,List,ListItem, Left, Right, Body,Thumbnail , Text, Icon, Button} from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import MapView from 'react-native-maps';
import { TandemQuery } from '../query/query';

const Tandems = ({data}) => {
  if(data.loading){
    return <Text>Loading ...</Text>
  }
  if(data.error){
    return <Text>{data.error.message}</Text>
  }
  return(
    <FlatList
      data={data.tandems}
      refreshing={data.networkStatus === 4}
      onRefresh={() => data.refetch()}
      onEndReachedThreshold={0.5}
      keyExtractor={(item, index) => index}
      onEndReached={() => {
        // The fetchMore method is used to load new data and add it
        // to the original query we used to populate the list
        data.fetchMore({
          variables: {latitude:51.041700,longitude:13.643200, offer:"spanish",search:"german", limit:3, skip: data.tandems.length },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            // Don't do anything if there weren't any new items
            if (!fetchMoreResult || fetchMoreResult.tandems.length === 0) {
              return previousResult;
            }
  
            return {
              // Concatenate the new results after the old ones
              tandems: previousResult.tandems.concat(fetchMoreResult.tandems),
            };
          },
        });
      }}
      renderItem={({ item }) => {
        if (!item.user) {
          return;
        }
  
        return (
          <Card key={item.id} >
                <CardItem>
                  <Left>
                      <Body>
                          <Text>{item.user}</Text>
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
                                {item.languages.offer.map((o, i) => {
                                  return(
                                    <ListItem key={i}><Text style={{fontSize: 10}}>{o}</Text></ListItem> 
                                )
                                })}
                          </List>
                        </Left>
                          <Right>
                              <List>
                                {item.languages.search.map((s, i) => {
                                  return(
                                    <ListItem key={i}><Text style={{fontSize: 10}}>{s}</Text></ListItem>
                                  )
                                })}
                              </List>
                          </Right>
                </CardItem>
            </Card>
        );
      }}
    />
  ) 
}

const TandemWithData = graphql(TandemQuery, {
  options: { variables: {latitude:51.041700,longitude:13.643200, offer:"spanish",search:"german", limit:3,  skip:0} },
})(Tandems);


export default class TandemScreen extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Tandems near Me',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-globe" style={{color: tintColor}}/>
     )
  });


  render() {
        return (
          <Content>
            <TandemWithData />
          </Content>
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

