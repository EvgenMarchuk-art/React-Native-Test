import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Eye from '../../assets/svg-image/Eye.svg';

const styles = StyleSheet.create({

  tinyLogo: {
    width: 50,
    height: 50,
    background: 'red',
  },

});

const EyePass = () => {
  return (
    <View style={styles.container}>
      <Eye />
    </View>
  );
};

export default EyePass;
