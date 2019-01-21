import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Contact, ProductList, ProductDetails } from "./App/Components";
import ProductListContainer from "./App/Containers/ProductListContainer";
import ProductDetailsContainer from "./App/Containers/ProductDetailsContainer";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './App/Reducers/RootReducer.js';

const store = createStore(RootReducer, {}, applyMiddleware(thunk));

const AppNavigator = createStackNavigator(
    {
        HomeScreen: Home,
        ContactScreen: Contact,
        ProductListScreen: ProductListContainer,
        ProductDetailsScreen: ProductDetailsContainer
    },
    {
        initialRouteName: "HomeScreen"
    }
);
const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}