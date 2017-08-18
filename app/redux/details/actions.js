'use strict';

import * as types from './types';
import { API_KEY } from '../../util/const';
import translations from '../../i18n';

export function requestRemoteData(id) {
    return (dispatch) => {

        dispatch(loading());

        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=${translations.t('locale')}`)
            .then(result => result.json())
            .then(result => { dispatch(dataReceived(result)) })
            .catch(exeption => { dispatch(error(exeption)) });
    };
};

export function requestVideo(id) {
    return (dispatch) => {

        fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(result => result.json())
            .then(result => { dispatch(videoReceived(result.results)) })
            .catch(exeption => { console.log(exeption) });
    };
};

function loading() {
    return {
        type: types.DETAILS_LOADING,
    };
};

function dataReceived(data) {
    return {
        type: types.DETAILS_RECEIVED,
        data
    };
};

function videoReceived(videos) {
    return {
        type: types.VIDEO_RECEIVED,
        videos
    };
}

function error(error) {
    return {
        type: types.DETAILS_ERROR,
        error
    };
};
