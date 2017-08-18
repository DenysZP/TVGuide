'use strict';

import * as types from './types';
import { API_KEY } from '../../util/const';
import translations from '../../i18n';

export function requestEpisodeList(showId, season) {
    return (dispatch) => {

        dispatch(loading())
        const url = `https://api.themoviedb.org/3/tv/${showId}/season/${season}?api_key=${API_KEY}&language=${translations.t('locale')}`;

        fetch(url)
            .then(result => result.json())
            .then(result => result.episodes)
            .then(result => { dispatch(received(result)) })
            .catch(exception => { dispatch(error(exception)) });
    };
};

function loading() {
    return {
        type: types.EPISODE_LIST_LOADING
    };
};

function received(list) {
    return {
        type: types.EPISODE_LIST_RECEIVED,
        list
    };
};

function error(error) {
    return {
        type: types.EPISODE_LIST_ERROR,
        error
    };
};
