'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Animated,
    Image
} from 'react-native';

class AnimatedImageButton extends React.Component {

    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(1)
    };

    spring() {
        this.springValue.setValue(0.8)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 3,
                tension: 1
            }
        ).start()
    };

    handlePressIn() {
        Animated.spring(this.springValue, {
            toValue: 0.8
        }).start()
    };

    handlePressOut() {
        Animated.spring(this.springValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    };

    render() {
        return (
            <TouchableWithoutFeedback
                onPressIn={() => this.handlePressIn()}
                onPressOut={() => this.handlePressOut()}
                onPress={() => this.props.onPress()}>
                <Animated.Image
                    style={[{ width: this.props.width, height: this.props.height, transform: [{ scale: this.springValue }] }, this.props.style]}
                    source={{ uri: this.props.uri }} />
            </TouchableWithoutFeedback>
        );
    };
}

export default AnimatedImageButton;
