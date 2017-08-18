'use strict';

import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';

import reducers from './redux';
import AppComponent from './appComponent';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppComponent />
            </Provider>
        );
    };
}
