import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import styles from './seasonItemStyle';
import PlaceholderImageView from '../../view/placeholderImageView';

class SeasonItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.onItemPress(this.props.showId, this.props.season)}
                activeOpacity={0.8}>
                <View style={styles.mainContainer}>
                    <View ref={component => this._root = component} style={styles.contentContainer}>
                        <PlaceholderImageView
                            placeholderSource={'tv_placeholder'}
                            imageSource={`https://image.tmdb.org/t/p/w500/${this.props.poster}`}
                            width={150}
                            height={225}
                            topLeftRadius={5}
                            topRightRadius={5}
                            bottomLeftRadius={5}
                            bottomRightRadius={5}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
}

export default SeasonItem;
