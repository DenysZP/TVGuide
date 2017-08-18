'use strict';

import * as types from './types';
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from '../../util/const';

export function setOrientation(event, lastOrientation) {
    return (dispatch) => {
        const { width, height } = event;
        const orientation = (width > height) ? LANDSCAPE_ORIENTATION : PORTRAIT_ORIENTATION;
        if (orientation != lastOrientation) {
            dispatch(orientationChanged(orientation));
        }
    }
};

function orientationChanged(orientation) {
    return {
        type: types.ORIENTATION_CHANGED,
        orientation: orientation
    };
};
