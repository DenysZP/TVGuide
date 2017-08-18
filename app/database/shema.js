import Realm from 'realm';

export const ShowSchema = {
    name: 'Show',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        original_name: 'string',
        overview: 'string',
        poster_path: 'string',
        backdrop_path: 'string',
        popularity: 'float',
    }
};
