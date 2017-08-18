'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    playButtonContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlayContainer: {
        zIndex: 10
    },
    infoContainer: {
        display: 'flex',
        left: 0,
        right: 0,
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        elevation: 5
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 5
    },
    content: {
        fontSize: 18,
        textAlign: 'left'
    },
    popularityLabel: {
        marginTop: 10,
        textAlign: 'right'
    },
    popularityRate: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    subSectionTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left'
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'left'
    },
    seasonList: {
        marginTop: 8
    },
    trailer: {
        margin: 10,
        alignSelf: 'stretch'
    }
});
