import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    mainContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        elevation: 3
    },
    contentContainer: {
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 5
    },
    infoContainer: {
        margin: 10
    },
    titleContainer: {
        fontSize: 16,
        marginBottom: 5,
        color: '#757575'
    },
    title: {
        fontSize: 18,
        color: 'black'
    },
    description: {
        flex: 1,
        fontSize: 14,
        textAlign: 'left',
        color: '#424242'
    }
});
