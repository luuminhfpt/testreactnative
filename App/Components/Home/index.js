import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { ApplicationStyles, Images, Metrics } from '../../Styles';
import Utils from '../../Helpers/Utils.js';

export default class Home extends Component {
  	render() {
	    return (
	    	<View style={ApplicationStyles.mainContainer}>
        		<View style={ApplicationStyles.container}>
        			<Text style={ApplicationStyles.welcome}>Welcome to</Text>
        			<Text style={ApplicationStyles.welcomeMain}>{ Utils.capitalize('SucculentShop') }</Text>
        			<Image source={Images.logo} style={ApplicationStyles.myImage} />
        			<View style={{marginTop:20}}>
	        			<TouchableOpacity
				          	title="Go to Products"
				          	onPress={() => this.props.navigation.navigate('ProductListScreen')}
				          	style={ApplicationStyles.navigationButton}
				        >
				        	<Text style={ApplicationStyles.navigationButtonText}>Products</Text>
				        </TouchableOpacity>
				        <TouchableOpacity
				          	title="Go to Contact"
				          	onPress={() => this.props.navigation.navigate('ContactScreen')}
				          	style={ApplicationStyles.navigationButton}
				        >
				        	<Text style={ApplicationStyles.navigationButtonText}>Contact</Text>
				        </TouchableOpacity>
			        </View>
        		</View>
	    	</View>
	    )
  	}
}