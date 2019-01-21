import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../Components/Product/ProductList';
import { FetProducts, AddProduct, EditProduct, DeleteProduct } from '../Actions/ProductActions';

class ProductListContainer extends Component {
    componentDidMount() {
        this.props.onFetchProduct();
    }
    render() {
        const {products} = this.props.productReducer;
        return(
            <ProductList dataList={products} {...this.props} />
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
        onFetchProduct: () => dispatch( FetProducts() )
    }
}

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(ProductListContainer);