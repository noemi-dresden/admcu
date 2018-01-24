import React, {Component} from 'react';

import {Image, View, StyleSheet} from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Icon, Title,Button, Body, StyleProvider} from 'native-base';
import LoginForm from './loginForm';



export default class Login extends Component {

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
		<View style={styles.container}>
		<View style={styles.logoContainer}>
            <Image 
			style = {styles.logo}
			source = {require('./images/flags.png')}
			/>
            <Text style={styles.title}>My Language Tandem Finder</Text>
			</View>
			<View style={styles.formContainer}>
			<LoginForm></LoginForm>
			</View>
    	 </View>
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