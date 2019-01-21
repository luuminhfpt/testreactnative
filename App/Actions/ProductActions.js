import { GET_PRODUCT, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCT_DETAILS } from '../Constants/ActionTypes'
import Api from '../Api/Api';

export function FetProducts() {
    return (dispatch) => {
        Api().then(resJSON => {
            dispatch( GetProductSuccess(resJSON.product) );
        })
        .catch(err => {
            dispatch( GetProductFail(err) )
        });
    }
}

export function FetProductDetails(id) {
    // return {
    //     type: GET_PRODUCT_DETAILS
    // }
    return (dispatch) => {
        Api('product_detail.php?id='+id).then(resJSON => {
            // console.log(resJSON);
            dispatch( GetProductDetails(resJSON[0]) );
        })
        .catch(err => {
            console.log(err);
            // dispatch( GetProductFail(err) )
        });
    }
}

export function GetProduct() {
    return {
        type: GET_PRODUCT,
    };
}

export function GetProductSuccess(data) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products: data
    };
}

export function GetProductFail(data) {
    return {
        type: GET_PRODUCTS_FAIL,
    };
}

export function GetProductDetails(data) {
    return {
        type: GET_PRODUCT_DETAILS,
        product: data
    };
}

