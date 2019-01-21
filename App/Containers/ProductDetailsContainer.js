import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetails from '../Components/Product/ProductDetails';
import { FetProducts, FetProductDetails } from '../Actions/ProductActions';

class ProductDetailsContainer extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        const productId = navigation.getParam('id', 'NO-ID');
        this.props.onFetProductDetails(productId);
    }
    render() {
        const {product} = this.props.productReducer;
        return(
            <ProductDetails dataDetails={product} />
        );
    }
}

const mapStateToProps = state => {
    return {
        productReducer: state.productReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetProductDetails: id => dispatch( FetProductDetails(id) )
    }
}

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailsContainer);