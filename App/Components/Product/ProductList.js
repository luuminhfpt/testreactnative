import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { ApplicationStyles, Images, Metrics } from '../../Styles';
import { API_URL } from '../../Constants/Api';
import Utils from '../../Helpers/Utils';

export default class ProductList extends Component {
    renderItem = ({item, index}) => {

        const { onFinishedItem, onDeleteItem } = this.props;
        // const img = '../../Images/product/'+item.images[0];
        return (
            <View style={ApplicationStyles.productItem}>
                <View>
                    <View style={{marginBottom:5, flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold'}}>{ Utils.capitalize(item.name) }</Text>
                        { this.getStock(item.stock) }
                    </View>
                    <Text>${ item.price }</Text>
                    <TouchableOpacity style={ApplicationStyles.productItemButton} title="Details" onPress={ () => this.props.navigation.navigate('ProductDetailsScreen', { id: item.id }) }>
                        <Text style={ApplicationStyles.productItemButtonText}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={{ uri: `${API_URL}images/product/${item.images[0]}` }} style={{width:50, height:65}} />
                </View>
            </View>
        );
    }
    getStock = (stock) => {
        return stock > 0 
            ? <Text style={{color:'#204A87'}}> (Stock: {stock})</Text> 
            : <Text style={{color:'#bf1134'}}> (Out of stock)</Text>;
    }
  	render() {
        const { dataList } = this.props;
	    return (
	    	<View style={ApplicationStyles.mainContainer}>
        		<View style={ApplicationStyles.container}>
        			<Text style={ApplicationStyles.welcome}>Product List</Text>
        			<ScrollView>
                        <FlatList
                            data={dataList}
                            extraData={this.props}
                            renderItem={ this.renderItem }
                            keyExtractor={(item, index) => index}
                        />
                    </ScrollView>
        		</View>
	    	</View>
	    )
  	}
}