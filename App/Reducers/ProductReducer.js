import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCT_DETAILS } from '../Constants/ActionTypes'

let appState = {
    products: [],
    product: {}
}

export default (state = appState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_SUCCESS:
			return { ...state, products: action.products };
		case GET_PRODUCT_DETAILS:
			return { ...state, product: action.product };
		default:
			return state;
	}
}