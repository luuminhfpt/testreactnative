import React, { Component } from 'react'
import {View, Text} from 'react-native';
import { ApplicationStyles } from '../../Styles';
import MapView from 'react-native-maps';

export default class Contact extends Component {
  	render() {
	    return (
	    	<View style={ApplicationStyles.mainContainer}>
        		<View style={ApplicationStyles.container}>
		    		<View style={ApplicationStyles.mapContainer}>
		    			<MapView style={ApplicationStyles.map}
		    				initialRegion={{
		    					latitude: 10.795020,
								longitude: 106.639980,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421
		    				}}
		    			>
		    				<MapView.Marker 
		    					coordinate={{
		    						latitude: 10.795020,
									longitude: 106.639980
		    					}}
		    					title={'Maker title'}
		    					description={'Maker description'}
		    				/>
		    			</MapView>
		    		</View>
		    		<View style={{ position:'absolute', top:420, padding:5 }}>
                        <Text style={{ fontSize:18, fontWeight:'bold', marginBottom:5 }}>CactusShop</Text>
                        <Text style={{marginBottom:3}}>Address: 71 Bau Cat 3 Street, Ward 12, Tan Binh District, Ho Chi Minh, Vietnam</Text>
                        <Text>Phone: 0917 722 055</Text>
                    </View>
		    	</View>
		    </View>
	    );
  	}
}
