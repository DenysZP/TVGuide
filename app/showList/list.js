'use strict';

import React from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View
} from 'react-native';
import ShowItem from './item';
import ProgressView from '../view/progressView';

class ShowList extends React.Component {

    _renderItem = ({ item }) => {
        return (
            <ShowItem item={item}
                isLandscape={this.props.isLandscape}
                onItemPress={() => this.props.onItemPress(item)}
                likedByDefault={this.props.likedByDefault} />
        );
    };

    render() {
        return (
            <FlatList
                removeClippedSubviews={true}
                data={this.props.data}
                renderItem={this._renderItem}
                ListFooterComponent={() => <ProgressView loading={this.props.loading} />}
                keyExtractor={item => item.id}
                onRefresh={this.props.handleRefresh}
                refreshing={this.props.refreshing}
                onEndReached={this.props.handleLoadMore}
                onEndReachedThreshold={2}
                numColumns={this.props.isLandscape ? 2 : 1}
            />
        );
    };
}

export default ShowList;
