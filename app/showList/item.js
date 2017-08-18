'use strict';

import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Share
} from 'react-native';

import AnimatedImageView from '../view/animatedImageButton';
import PlaceholderImageView from '../view/placeholderImageView';
import ShareButton from '../buttons/share';
import LikeButton from '../buttons/like';
import styles from './itemStyle';
import translations from '../i18n';
import { LANDSCAPE_ORIENTATION } from '../util/const';

class ShowItem extends React.PureComponent {

  renderPopularity = (isLandscape, item) => {
    if (isLandscape) {
      return (null);
    } else {
      return (
        <Text style={styles.popularityLabel}>
          {translations.t('popularity')} <Text style={styles.popularityRate}>
            {item.popularity.toFixed(2)}</Text>
        </Text>
      );
    }
  };

  render() {
    const item = this.props.item
    const isLandscape = this.props.isLandscape
    return (
      <TouchableOpacity
        onPress={() => this.props.onItemPress(item)}
        activeOpacity={0.8}>
        <View style={isLandscape ? styles.landscapeWrapper : styles.portraitWrapper}>
          <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
              <PlaceholderImageView
                placeholderSource={'tv_placeholder'}
                imageSource={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                width={150}
                height={225}
                backgroundColor='#FAFAFA'
                topLeftRadius={5}
                bottomLeftRadius={5}
              />
              <View style={styles.infoContainer}>
                <Text
                  numberOfLines={2}
                  style={styles.title}>
                  {item.name}
                </Text>
                <Text
                  numberOfLines={5}
                  style={styles.description}>
                  {item.overview}
                </Text>
                {this.renderPopularity(isLandscape, item)}
                <View style={styles.actionContainer}>
                  <ShareButton item={item} />
                  <LikeButton item={item} likedByDefault={this.props.likedByDefault} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>);
  };
}

export default ShowItem;
