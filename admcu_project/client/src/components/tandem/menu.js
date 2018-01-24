import React , { Component } from 'react';
import { Container, Content, ListItem,  Left, Icon, Title, Body, StyleProvider,List} from 'native-base';
import Constants from './Constants'; 
import {Image, Button, View, StyleSheet, TextInput,Text, CheckBox,Alert, Header,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {TandemsAllQuery} from '../query/query';
import { graphql } from 'react-apollo'; // 2.0.0
import gql from 'graphql-tag'; // 2.5.0
import {getTandemsQuery} from '../query/query';
import {NetInfo} from 'react-native';
import CardScreen from './card';
import Register from '../tandem/register';



class MenuScreen extends Component {

 constructor(props){
      super(props);
      this.state = {
        //email : this.props.screenProps.email
        // when we are really doing it for the current user we will use this field
        //username: ljupka'

      }
}


 
 render() {
     const { navigate } = this.props.navigation;
    


     NetInfo.isConnected.fetch().then(isConnected => {
        console.log('First, is ' + (isConnected ? 'online' : 'offline'));

        if(isConnected == 'online')
        console.log('is connected is online! smenigo! ')
      });

      function handleFirstConnectivityChange(isConnected) {
        console.log('Then, is ' + (isConnected ? 'online' : 'offline'));

        if((isConnected ? 'online' : 'offline') == 'offline'){
            Alert.alert(
              'Connection changed',
              'You are offline ',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () =>  console.log('Ok Pressed'), style: 'cancel'},
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

    

     if(this.props.getTandemsQuery.loading){
        return(<View><Text>Loading...</Text></View>)
    }

    if(this.props.getTandemsQuery.error){
        console.log(this.props.data.error)
        return(<View><Text>An unexpected error occured</Text></View>)
    }


    
    try {

      
      // const newData = client.readQuery({ query,
       //variables: { username: "ljupka" }});
       //newData.user.push(newUser);
       //client.writeQuery({ query, data: newUser }); // newData bese na mesto na data!
       //console.log("Userwithdata.id looks like this " + UserWithdata.data);

       
       
    //     Constants.client.writeQuery({ query: TandemsAllQuery, data: { allTandems: [this.props.TandemsAllQuery.allTandems]
    //   }
    //  }); 
       //const data = Constants.client.readQuery({ query: TandemsAllQuery});
       //console.log(" Uploading store" + [data.allTandems]);
       const data = Constants.client.readQuery({ query: getTandemsQuery});
     
       console.log(" Uploading store" + data.matches);
       
     } catch (e) {
       console.log(e);
       console.log("Not updating store - not loaded yet");
     }

    
  

        return (
        //     <View style={Constants.styles.container}>
		// 	<TextInput
		// 		placeholder ="offer" style={Constants.styles.input}
		// 		placeholderTextColor = "rgba(255, 255, 255, 0.7)">
		// 	</TextInput>
		// 	<TextInput 
		// 		placeholder="search" style={Constants.styles.input} 
		// 		placeholderTextColor = "rgba(255, 255, 255, 0.7)"> 
		// 	</TextInput>
		
		// 	<TouchableOpacity style={Constants.styles.buttonContainer}>
        //     <Button style={Constants.styles.buttonText}
        //     title="Find suitable matches"> 
        //     </Button>
        //     <TandemsWithData></TandemsWithData>
                
 		// 	</TouchableOpacity>
        //  </View>


        <Content>
        <List>
         {this.props.getTandemsQuery.matches.map(matche => {
              return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
            
                <Text style={styles.title}>Hey {matche.user} , you have 0 new messages</Text>
                <Text style={styles.title}>My Language Tandem Finder</Text>
                </View>
            </View>
              )     
         })}
        </List>

        <Text></Text>

        <Button
        title="Show on map"
         onPress={() =>
           navigate('CardScreen')// do Register bese vaka , {email: this.state.email}          
         }
       />
        </Content>
        );

    }
}


const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#3498db'
	},
	logo: {
		width: 100,
		height: 100 
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	title: {
		color :'#FFF',
		marginTop: 10, 
		width: 170,
		textAlign: 'center'
	}
});




// , {
//     options: { variables: { username: this.state.username } }}


// const TandemsWithData = graphql(TandemsAllQuery, { name: 'TandemsAllQuery'}
//   )(MenuScreen)
//   export default TandemsWithData; 

const TandemsWithData = graphql(getTandemsQuery, { name: 'getTandemsQuery'}
)(MenuScreen)
export default TandemsWithData; 




