import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const width1 = Dimensions.get('window').width;
const height1 = Dimensions.get('window').height;

const NavigationStyle = StyleSheet.create({
  MultipleScreenFirstViewStyle: {
    width: width1,
    height: height1,
    flex: 1,
    justifyContent: 'center',
  },

  NavFirstViewStyle: {
    flex: 1,
  },
});

export default NavigationStyle;
