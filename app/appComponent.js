'use strict';

import React from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { setOrientation } from './redux/app/actions';
import Router from './navigation/router';

const mapStateToProps = (state) => {
    return {
        orientation: state.appReducer
    };
};

const mapDispatchToProps = {
    setOrientation
};

class AppComponent extends React.Component {

    _onLayout = event => {
        this.props.setOrientation(event.nativeEvent.layout, this.props.orientation)
    };

    render() {
        return (
            <View style={{ flex: 1 }} onLayout={this._onLayout}>
                <Router />
            </View>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
