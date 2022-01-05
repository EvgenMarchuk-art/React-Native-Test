import React from 'react';
import {StyleSheet} from 'react-native';

const RegisterFormStyle = StyleSheet.create({
  FirstViewStyle: {
    width: 400,
    padding: 25,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  passStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextInputStyle: {
    flex: 1,
  },

  EyeStyle: {
    width: 30,
    height: 30,
  },
});

export default RegisterFormStyle;
