'use strict';

import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import popularReducer from './popular/reducer';
import detailsReducer from './details/reducer';
import favoriteReducer from './favorite/reducer';
import likeReducer from './like/reducer';
import episodesReducer from './episodes/reducer';

const reducers = combineReducers({
  appReducer, popularReducer, detailsReducer, favoriteReducer, likeReducer, episodesReducer
});

export default reducers;
