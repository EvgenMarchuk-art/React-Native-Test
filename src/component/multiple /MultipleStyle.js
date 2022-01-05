import React from 'react';
import {StyleSheet} from 'react-native';

const MultipleStyle = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },

  imageStyle: {
    width: 150,
    height: 150,
    marginTop: 10,
  },

  XCloseStyle: {
    width: 30,
    height: 30,
  },

  ViewTouchable: {
    position: 'absolute',
    marginLeft: 120,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12, },

    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  filePathFirstWiev: {
    width: 150,
    height: 130,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default MultipleStyle;
