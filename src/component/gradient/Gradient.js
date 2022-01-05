import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import GradientStyle from './GradientStyle';
const Gradient = ({children}) => {
  return (
    <View style={GradientStyle.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={GradientStyle.gradient}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default Gradient;
