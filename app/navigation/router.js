'use strict';

import React from 'react';
import { StackNavigator } from 'react-navigation';

import PopularScreen from '../screen/popular';
import DetailsScreen from '../screen/details';
import FavoriteScreen from '../screen/favorite';
import EpisodesScreen from '../screen/episodes';

const Router = StackNavigator({
  Popular: { screen: PopularScreen },
  Details: { screen: DetailsScreen },
  Favorite: { screen: FavoriteScreen },
  Episodes: { screen: EpisodesScreen }
});

export default Router;
