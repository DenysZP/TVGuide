import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

import { requestRemoteData, refreshRemoteData } from '../../redux/popular/actions';
import { connect } from 'react-redux';

import { LANDSCAPE_ORIENTATION } from '../../util/const';
import ProgressView from '../../view/progressView';
import ShowList from '../../showList';
import translations from '../../i18n';

const mapStateToProps = (state) => {
  return {
    orientation: state.appReducer,
    loading: state.popularReducer.loading,
    data: state.popularReducer.data,
    page: state.popularReducer.page,
    refreshing: state.popularReducer.refreshing,
    error: state.popularReducer.error
  };
};

const mapDispatchToProps = {
  requestRemoteData, refreshRemoteData
};

class MainScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: translations.t('popular'),
    headerRight:
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Favorite')
      }}
      activeOpacity={0.8}>
      <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{translations.t('favorite')}</Text>
    </TouchableOpacity>
  });

  componentDidMount() {
    this.props.requestRemoteData(this.props.page);
  };

  handleItemPress = (item) => {
    this.props.navigation.navigate('Details', { item: item })
  };

  handleRefresh = () => {
    this.props.refreshRemoteData();
  };

  handleLoadMore = () => {
    if (!this.props.loading) {
      this.props.requestRemoteData(this.props.page);
    }
  };

  render() {
    const isLandscape = this.props.orientation == LANDSCAPE_ORIENTATION;
    return (
      <ShowList
        data={this.props.data}
        onItemPress={this.handleItemPress}
        loading={this.props.loading}
        handleRefresh={this.handleRefresh}
        refreshing={this.props.refreshing}
        handleLoadMore={this.handleLoadMore}
        key={this.props.orientation}
        isLandscape={isLandscape}
      />
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
