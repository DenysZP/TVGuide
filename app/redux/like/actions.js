'use strict';

import * as types from './types';

import Realm from 'realm';
import { ShowSchema } from '../../database/shema';
import { requestLocalData } from '../favorite/actions';

const realm = new Realm({ schema: [ShowSchema] });

export function like(item) {
    return (dispatch) => {
        try {
            realm.write(() => {
                realm.create('Show', {
                    id: item.id,
                    name: item.name,
                    original_name: item.original_name,
                    overview: item.overview,
                    poster_path: item.poster_path,
                    backdrop_path: item.backdrop_path,
                    popularity: item.popularity,
                }, true);
                dispatch(added(item.id))
            });
        } catch (e) {
            console.log("Error on creation", e);
        }
    };
};

export function dislike(item) {
    return (dispatch) => {
        const id = item.id
        try {
            realm.write(() => {
                const storedItem = realm.objectForPrimaryKey('Show', id)
                if (storedItem != null) {
                    realm.delete(storedItem)
                }
                dispatch(removed(id))
                dispatch(requestLocalData())
            });
        } catch (e) {
            console.log("Error when deleting", e);
        }
    };
};

export function initStore(ids) {
    return (dispatch) => {
        if (ids.length > 0) {
            dispatch(initialized(ids))
        }
    };
};

function added(id) {
    return {
        type: types.ADDED,
        id
    };
};

function removed(id) {
    return {
        type: types.REMOVED,
        id
    };
};

function initialized(ids) {
    return {
        type: types.INITIALIZED,
        ids
    };
};
