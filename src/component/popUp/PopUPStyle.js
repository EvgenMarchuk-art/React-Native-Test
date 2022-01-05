import React from "react";
import { StyleSheet } from "react-native";

const PopUPStyle = StyleSheet.create({

  buttonStyle: {
    width: 300,
    padding: 10,
    backgroundColor: '#f5821f',
    margin: 15,
  },
  buttonTextStyle: {
    color: 'black',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },

  FirstDialogContentStyle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  DialogContentFirstViewStyle:{
    width: 400,
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default PopUPStyle;
