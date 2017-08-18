'use strict';

import React from 'react';
import { Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { requestRemoteData, requestVideo } from '../../redux/details/actions';

import { LANDSCAPE_ORIENTATION } from '../../util/const';
import ShareButton from '../../buttons/share';
import DetailsScreenComponent from './component';
import translations from '../../i18n';

const mapStateToProps = (state) => {
    return {
        orientation: state.appReducer,
        loading: state.detailsReducer.loading,
        data: state.detailsReducer.data,
        video: state.detailsReducer.video,
        error: state.detailsReducer.error
    };
};

const mapDispatchToProps = {
    requestRemoteData, requestVideo
};

const IMAGE_RATIO = 0.562;
const INFO_OFFSET_RATIO = 0.15;

class DetailsScreenContainer extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: translations.t('details'),
        headerRight: <ShareButton />
    });

    componentDidMount() {
        const id = this.props.navigation.state.params.item.id;
        this.props.requestRemoteData(id);
        this.props.requestVideo(id);
    };

    render() {
        const isLandscape = this.props.orientation == LANDSCAPE_ORIENTATION;
        const { params } = this.props.navigation.state;
        const window = Dimensions.get('window');
        const width = window.width;
        const height = width * (IMAGE_RATIO / (isLandscape ? 2 : 1));
        const infoShiftPosition = -height * INFO_OFFSET_RATIO;
        return (
            <DetailsScreenComponent
                isLandscape={isLandscape}
                item={this.props.navigation.state.params.item}
                data={this.props.data}
                video={this.props.video}
                loading={this.props.loading}
                error={this.props.error}
                headerWidth={width}
                headerHeight={height}
                infoShiftPosition={infoShiftPosition}
                onItemPress={(showId, season) =>
                    this.props.navigation.navigate('Episodes', { showId: showId, season: season })} />
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreenContainer);
