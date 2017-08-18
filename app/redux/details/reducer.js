'use strict';

import * as types from './types';

const initialState = {
  loading: false,
  data: null,
  video: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.DETAILS_LOADING:
      return { ...state, loading: true, data: null, video: null, error: null }
    case types.DETAILS_RECEIVED:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      }
    case types.VIDEO_RECEIVED:
      return {
        ...state,
        video: action.videos
      }
    case types.DETAILS_ERROR:
      return { ...state, loading: false, data: null, error: action.error }
    default:
      return state
  }
};
