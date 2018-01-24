import React from 'react';
import { graphql } from "react-apollo";
import { Text } from 'native-base';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import {Image, View, StyleSheet} from 'react-native';



class Probe extends React.Component {
    
    // props ni trebaat za da proverime dali se se odvilo kako sto treba, ako ne,da najdem ekade e zgreseno
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            user: PropTypes.object,

        }).isRequired,
    }
    
    
    render () {

        if(this.props.data.loading){
            console.log("schnu")
            return(<View><Text>Loading...</Text></View>)
        }

        if(this.props.data.error){
            console.log(this.props.data.error)
            return(<View><Text>An unexpected error occured</Text></View>)
        }

        return (
            <View style={styles.container}>
            <View style={styles.logoContainer}>
            
                <Text style={styles.title}>Hey {this.props.data.user.username} , you have 0 new messages</Text>
                <Text style={styles.title}>My Language Tandem Finder</Text>
                </View>
                <View style={styles.formContainer}>

                </View>
             </View>
        ) 
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
const ProbeQuery = gql`
query ProbeQuery {
    user(username:"ljupka"){
     username
    }
}
`

// probe dobiva podatoci od probequery i taka se pass na drugi 
// the result from the query is passed to the props of the component
const ProbeWithData = graphql (ProbeQuery)(Probe)
export default ProbeWithData