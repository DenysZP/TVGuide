'use strict';

import React from 'react';
import {
    TouchableOpacity,
    Share,
    ScrollView,
    View,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';

import PlaceholderImageView from '../../view/placeholderImageView';
import PlayButtonContainer from '../../buttons/play';
import SeasonItem from './seasonItem';
import styles from './detailsScreenStyle';
import translations from '../../i18n';

class DetailsScreenComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            scrollOffset: 1
        }
    };

    handleScroll = event => {
        var scrollOffset = event.nativeEvent.contentOffset.y;
        scrollOffset = scrollOffset == 0 ? 1 : scrollOffset
        this.setState({
            scrollOffset: scrollOffset
        })
    };

    render() {
        const item = this.props.item;
        const title = item.name === item.original_name ? item.name : `${item.name} (${item.original_name})`;
        return (
            <ScrollView
                stickyHeaderIndices={[0]}
                onScroll={this.handleScroll}>
                <View style={{ opacity: 1 - (this.state.scrollOffset / this.props.headerHeight) }}>
                    <PlaceholderImageView
                        placeholderSource={'tv_placeholder'}
                        imageSource={`https://image.tmdb.org/t/p/w1000/${item.backdrop_path}`}
                        width={this.props.headerWidth}
                        height={this.props.headerHeight} />
                    <View style={styles.playButtonContainer}>
                        <PlayButtonContainer video={this.props.video} />
                    </View>
                </View>
                <View style={[styles.overlayContainer, { top: this.props.infoShiftPosition }]}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text style={styles.content}>
                            {item.overview}
                        </Text>
                        <Text style={styles.popularityLabel}>
                            {translations.t('popularity')} <Text style={styles.popularityRate}>
                                {item.popularity.toFixed(2)}
                            </Text>
                        </Text>
                    </View>
                    {this.renderSubInfo()}
                </View>
            </ScrollView>
        );
    };

    renderSubInfo() {
        const loading = this.props.loading;
        const data = this.props.data;
        if (!loading && data != null) {
            return (
                <View>
                    <Text style={styles.sectionTitle}>{translations.t('info')}</Text>
                    <View style={styles.infoContainer}>
                        {this.renderGenres(data.genres)}
                        {this.renderCountries(data.origin_country)}
                    </View>
                    {this.renderSeasonList(data.seasons)}
                </View>
            );
        } else if (loading) {
            return (<ActivityIndicator animating size="large" />);
        }
    };

    renderGenres(genres) {
        if (genres != null && genres.length > 0) {
            const genresStr = genres.map((elem) => elem.name).join(", ")
            return (
                <View>
                    <Text style={styles.subContent}>
                        <Text style={styles.subSectionTitle}>{translations.t('genres')} </Text>{genresStr}
                    </Text>
                </View>
            );
        } else {
            return (null);
        }
    }

    renderCountries(countries) {
        if (countries.length > 0) {
            const countriesStr = countries.join(", ")
            return (
                <View>
                    <Text style={styles.subContent}>
                        <Text style={styles.subSectionTitle}>{translations.t(countries.length > 1 ? 'countries' : 'country')} </Text>{countriesStr}
                    </Text>
                </View>
            );
        } else {
            return (null);
        }
    }

    renderSeasonList(seasons) {
        if (seasons != null && seasons.length > 0) {
            const showId = this.props.item.id;
            return (
                <View>
                    <Text style={styles.sectionTitle}>{translations.t('season_list')}</Text>
                    <FlatList
                        style={styles.seasonList}
                        removeClippedSubviews={true}
                        data={seasons}
                        renderItem={({ item, separators }) =>
                            <SeasonItem
                                showId={showId}
                                season={item.season_number}
                                poster={item.poster_path}
                                onItemPress={this.props.onItemPress}
                            />
                        }
                        keyExtractor={season => season.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            );
        }
    };
}

export default DetailsScreenComponent;
