'use strict';

import * as types from './types';
import { PORTRAIT_ORIENTATION } from '../../util/const';

export default function reducer(state = PORTRAIT_ORIENTATION, action) {
    switch (action.type) {
        case types.ORIENTATION_CHANGED:
            return action.orientation
        default:
            return state
    }
};
