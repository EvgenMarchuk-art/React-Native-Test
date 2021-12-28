import React from 'react';
import Navigation from './component/navigation/Navigation';
import {View} from 'react-native';
import TextFont from './component/textFont/TextFont';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navigation />
      <TextFont />
    </View>
  );
};

export default App;
