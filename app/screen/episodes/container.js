'use strict';

import React from 'react';
import { Dimensions } from 'react-native';

import { requestEpisodeList } from '../../redux/episodes/actions';
import { connect } from 'react-redux';

import { LANDSCAPE_ORIENTATION } from '../../util/const';
import EpisodesScreenComponent from './component';
import translations from '../../i18n';

const mapStateToProps = (state) => {
    return {
        orientation: state.appReducer,
        loading: state.episodesReducer.loading,
        list: state.episodesReducer.list,
        error: state.episodesReducer.error
    };
};

const mapDispatchToProps = {
    requestEpisodeList
};

const IMAGE_RATIO = 0.562;

class EpisodesScreenContainer extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: translations.t('episode_list')
    });

    componentDidMount() {
        const params = this.props.navigation.state.params
        this.props.requestEpisodeList(params.showId, params.season)
    };

    render() {
        const isLandscape = this.props.orientation == LANDSCAPE_ORIENTATION;
        const window = Dimensions.get('window');
        const width = window.width
        const height = width * IMAGE_RATIO
        return (
            <EpisodesScreenComponent
                season={this.props.navigation.state.params.season}
                width={width}
                height={height}
                loading={this.props.loading}
                list={this.props.list}
                error={this.props.error}
                isLandscape={isLandscape}
            />
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesScreenContainer);
