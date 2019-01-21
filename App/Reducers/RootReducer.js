import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

const RootReducer = combineReducers({
    productReducer: ProductReducer
});

export default RootReducer;