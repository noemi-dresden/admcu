import React, {Component} from 'react';

import {Image, View, StyleSheet, TextInput,Text, CheckBox, Header,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Container, Content, ListItem,  Left, Icon, Title,Button, Body, StyleProvider} from 'native-base';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';




export default class LoginForm extends Component {
	render() {
		return (
		<View style={styles.container}>
			<TextInput
				placeholder ="username" style={styles.input}
				placeholderTextColor = "rgba(255, 255, 255, 0.7)">
			</TextInput>
			<TextInput 
				placeholder="password" style={styles.input} 
				placeholderTextColor = "rgba(255, 255, 255, 0.7)"> 
			</TextInput>
		
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={styles.buttonText}> LOGIN </Text>
			</TouchableOpacity>
         </View>
		);
	}
}
	
	const styles = StyleSheet.create({
	container: {
		padding:20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		marginBottom: 20,
		color: '#f0f',
		paddingHorizontal: 10
		
	},
	buttonContainer: {
		backgroundColor: '#FFF',
		paddingVertical: 10,
	},
	buttonText: {
		textAlign: 'center',
		color: '#F0F',
		fontWeight: '700',
		
	}
});
