'use strict';

import * as types from './types';

const initialState = {
  loading: false,
  data: [],
  refreshing: false,
  page: 0,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: null }
    case types.SUCCESS:
      return {
        ...state,
        loading: false,
        refreshing: false,
        data: state.page === 0 ? action.data : [...state.data, ...action.data],
        page: state.page + 1,
        error: null
      }
    case types.REFRESH:
      return { ...state, refreshing: true, page: 0 }
    case types.ERROR:
      return { ...state, loading: false, refreshing: false, data: [], error: action.error }
    default:
      return state
  }
};
