'use strict';

import * as types from './types';
import { API_KEY } from '../../util/const';
import translations from '../../i18n';

import Realm from 'realm';
import { ShowSchema } from '../../database/shema';

import { initStore } from '../like/actions';

const realm = new Realm({ schema: [ShowSchema] });

export function requestRemoteData(page) {
    return (dispatch) => {

        dispatch(loading())
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${translations.t('locale')}&page=${page + 1}`;

        fetch(url)
            .then(result => result.json())
            .then(result => result.results)
            .then(result => {
                const localIds = []
                result.map(item => {
                    const localItem = realm.objectForPrimaryKey('Show', item.id)
                    if (localItem != null) {
                        localIds.push(item.id)
                    }
                })
                dispatch(initStore(localIds))
                return result
            })
            .then(result => { dispatch(success(result)) })
            .catch(exception => { dispatch(error(exception)) });
    };
};

export function refreshRemoteData() {
    return (dispatch) => {
        dispatch(refresh())
        dispatch(requestRemoteData(0))
    };
};

function loading() {
    return {
        type: types.LOADING,
    };
};

function success(data) {
    return {
        type: types.SUCCESS,
        data
    };
};

function refresh() {
    return {
        type: types.REFRESH
    };
};

function error(error) {
    return {
        type: types.ERROR,
        error
    };
};
