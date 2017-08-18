'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    elevation: 3
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 5
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopColor: '#E0E0E0',
    borderTopWidth: 0.5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5
  },
  description: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left'
  },
  popularityLabel: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    textAlign: 'right'
  },
  popularityRate: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  portraitWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    minWidth: '100%'
  },
  landscapeWrapper: {
    padding: 5,
    minWidth: '50%'
  }
});
