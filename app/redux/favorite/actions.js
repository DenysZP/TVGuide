'use strict';

import * as types from './types';

import Realm from 'realm';
import { ShowSchema } from '../../database/shema';

const realm = new Realm({ schema: [ShowSchema] });

export function requestLocalData() {
    return (dispatch) => {
        try {
            const data = realm.objects('Show').sorted('popularity', true).map(x => Object.assign({}, x))
            dispatch(success([...data]))
        } catch (e) {
            console.log("Error on Loading", e);
        }
    };
};

function success(data) {
    return {
        type: types.LOCAL_SUCCESS,
        data
    };
};

function error(error) {
    return {
        type: types.LOCAL_ERROR,
        error
    };
};
