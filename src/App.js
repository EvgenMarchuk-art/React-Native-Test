import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import SvgComponent from './component/svg/svg-component';
import Gradient from './component/gradient/Gradient.js';
import TextFont from './component/textFont/TextFont';

import TextGradient from './component/textGradient/TextGradient';
import {Dimensions} from 'react-native';
import Navigation from './component/navigation/Navigation';
import RegisterForm from './component/user-form/RegisterForm';
import EyePass from './component/svg/EyePass';
import Multiple from './component/multiple /multiple';

const App = () => {
  // const Stack = createNativeStackNavigator();
  return (
    <View>
      {/*<Navigation/>*/}
      <RegisterForm />
      {/*<Multiple />*/}
    </View>
  );
};

export default App;
