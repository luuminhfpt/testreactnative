import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { ApplicationStyles, Images, Metrics } from '../../Styles';
import { API_URL } from '../../Constants/Api';
import Utils from '../../Helpers/Utils';

export default class ProductDetails extends Component {
    getStock = (stock) => {
        return stock > 0 
            ? <Text style={{color:'#204A87'}}> (Stock: {stock})</Text> 
            : <Text style={{color:'#bf1134'}}> (Out of stock)</Text>;
    }
  	render() {
        const { dataDetails } = this.props;
        const imgArr = dataDetails.images;
	    return (
	    	<View style={ApplicationStyles.mainContainer}>
        		<View style={ApplicationStyles.container}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={{ uri: `${API_URL}images/product/${imgArr}` }} style={{width:200, height:340}} />
            			<Text style={ApplicationStyles.productTitle}>{ Utils.capitalize(dataDetails.nameProduct) }</Text>
                        <Text style={ApplicationStyles.productPrice}>
                            ${dataDetails.price}
                        </Text>
                        { this.getStock(dataDetails.stock) }
                        <Text style={ApplicationStyles.productDesc}>{dataDetails.description}</Text>
                    </View>
        		</View>
	    	</View>
	    )
  	}
}