'use strict';

import * as types from './types';

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.ADDED:
      return [...state, action.id]
    case types.REMOVED:
      const newState = [...state]
      const index = newState.indexOf(action.id)
      if (index >= 0) {
        newState.splice(index, 1)
        return newState
      } else { return state }
    case types.INITIALIZED:
      state.push.apply(state, action.ids);
      return [...new Set(state)]
    default:
      return state
  }
};
