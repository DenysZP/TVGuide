'use strict';

import React from 'react';

import ShowList from '../../showList';

import { LANDSCAPE_ORIENTATION } from '../../util/const';
import { requestLocalData } from '../../redux/favorite/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        orientation: state.appReducer,
        data: state.favoriteReducer.data,
        error: state.favoriteReducer.error
    };
};

const mapDispatchToProps = {
    requestLocalData
};

class FavoriteScreenContainer extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Favorite`
    });

    componentDidMount() {
        this.props.requestLocalData()
    };

    handleItemPress = (item) => {
        this.props.navigation.navigate('Details', { item: item })
      };

    render() {
        const isLandscape = this.props.orientation == LANDSCAPE_ORIENTATION;
        return (
            <ShowList
                data={this.props.data}
                onItemPress={this.handleItemPress}
                likedByDefault={true}
                key={this.props.orientation}
                isLandscape={isLandscape}
            />
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreenContainer);
