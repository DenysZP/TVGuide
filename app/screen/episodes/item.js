'use strict';

import React from 'react';
import { View, Text } from 'react-native';

import PlaceholderImageView from '../../view/placeholderImageView';

import styles from './itemStyles';

class EpisodeItem extends React.Component {

    renderDescription(description) {
        if (description) {
            return (
                <Text style={styles.description}>
                    {description}
                </Text>
            );
        } else {
            return (null);
        }
    };

    render() {
        const { item } = this.props
        return (
            <View style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <PlaceholderImageView
                        placeholderSource={'tv_placeholder'}
                        imageSource={`https://image.tmdb.org/t/p/w1000/${item.still_path}`}
                        width={this.props.width}
                        height={this.props.height}
                        topLeftRadius={5}
                        topRightRadius={5}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.titleContainer}>
                            #{item.episode_number} <Text style={styles.title}>{item.name}</Text>
                        </Text>
                        {this.renderDescription(item.overview)}
                    </View>
                </View>
            </View>
        );
    };
}

export default EpisodeItem;
