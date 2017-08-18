'use strict';

import React from 'react';
import { FlatList, Text } from 'react-native';
import ProgressView from '../../view/progressView';
import EpisodeItem from './item';

import styles from './componentStyles';
import translations from '../../i18n';

class EpisodesScreenComponent extends React.Component {

    renderHeader() {
        const value = this.props.season > 0 ? `${translations.t('season')} ${this.props.season}` : translations.t('specials')
        return (
            <Text style={styles.header}>{value}</Text>
        );
    };

    render() {
        if (this.props.loading) {
            return (<ProgressView loading={true} />);
        } else {
            return (
                <FlatList
                    removeClippedSubviews={true}
                    data={this.props.list}
                    renderItem={({ item, separators }) => (
                        <EpisodeItem item={item}
                            width={this.props.width}
                            height={this.props.height}
                            onItemPress={() => this.props.onItemPress(item)}
                            likedByDefault={this.props.likedByDefault} />
                    )}
                    ListHeaderComponent={this.renderHeader()}
                    keyExtractor={item => item.id}
                />
            );
        }
    };
}

export default EpisodesScreenComponent;
