'use strict';

import React from 'react';
import { View, Image } from 'react-native';

class PlaceholderImageView extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { isImageLoaded: null };
    };

    renderPlaceholder(width) {
        if (this.state.isImageLoaded == null) {
            return (
                <Image
                    source={{ uri: this.props.placeholderSource }}
                    style={{
                        top: 0,
                        left: 0,
                        width: width,
                        height: this.props.height,
                        position: 'absolute',
                        resizeMode: 'contain'
                    }} />
                );
        }
    };

    render() {

        const width = this.props.width
        return (
            <View style={{
                width: width,
                height: this.props.height,
                backgroundColor: this.props.backgroundColor,
                borderTopLeftRadius: this.props.topLeftRadius,
                borderTopRightRadius: this.props.topRightRadius,
                borderBottomRightRadius: this.props.bottomRightRadius,
                borderBottomLeftRadius: this.props.bottomLeftRadius
            }}>
                {this.renderPlaceholder(width)}
                <Image
                    onLoad={() => this.setState(
                        { isImageLoaded: !this.state.isImageLoaded }
                    )}
                    source={{ uri: this.props.imageSource }}
                    style={{
                        top: 0,
                        left: 0,
                        width: width,
                        height: this.props.height,
                        position: 'absolute',
                        resizeMode: 'cover',
                        borderTopLeftRadius: this.props.topLeftRadius,
                        borderTopRightRadius: this.props.topRightRadius,
                        borderBottomRightRadius: this.props.bottomRightRadius,
                        borderBottomLeftRadius: this.props.bottomLeftRadius
                    }} />
            </View>
        );
    };
}

export default PlaceholderImageView;
