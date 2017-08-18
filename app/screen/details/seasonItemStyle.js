'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    mainContainer: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        elevation: 5
    },
    contentContainer: {
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: 5
    }
});
