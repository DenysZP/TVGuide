'use strict';

import * as types from './types';

const initialState = {
  data: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOCAL_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null
      }
    case types.LOCAL_ERROR:
      return { ...state, data: [], error: action.error }
    default:
      return state
  }
};
