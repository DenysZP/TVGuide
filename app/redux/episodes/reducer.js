'use strict';

import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  error: null
};

export default function reducer(state = [initialState], action) {
  switch (action.type) {
    case types.EPISODE_LIST_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.EPISODE_LIST_RECEIVED:
      return {
        ...state,
        loading: false,
        list: action.list,
        error: null
      }
    case types.EPISODE_LIST_ERROR:
      return { ...state, loading: false, list: [], error: action.error }
    default:
      return state
  }
};
