import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {Image, View, StyleSheet, TextInput,Text, CheckBox, Header,TouchableOpacity, KeyboardAvoidingView} from 'react-native';



//http://192.168.178.21
const Constants = {
    client : new ApolloClient({
        link: new HttpLink({ uri: 'http://192.168.0.7:4000/graphql' }),
        cache: new InMemoryCache({
          dataIdFromObject: object => object.id,
        }),
        addTypename: true
      }),

      
     styles : StyleSheet.create({
        container: {
          padding:20
        },
        input: {
          height: 40,
          backgroundColor: 'rgba(0,191,255, 0.7)',
          marginBottom: 20,
          color: '#f0f',
          paddingHorizontal: 10
          
        },
        buttonContainer: {
          backgroundColor: '#1E90FF',
          paddingVertical: 10,
        },
        buttonText: {
          textAlign: 'center',
          color: '#4F4F4F',
          fontWeight: '700',
          
        }
      }),
  }
  export default Constants