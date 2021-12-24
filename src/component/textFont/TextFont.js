import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const TextFont = () => {
  return (
    // <ScrollView>
    <View>

      <Text style={{fontFamily: 'SFUIDisplay-Regular'}}>Some text</Text>
      <View>
        <Text style={{fontFamily: 'Notable-Regular'}}>Some more text</Text>
        <Text style={{fontFamily: 'SFUIDisplay-Semibold'}}>Some more text</Text>
      </View>
    </View>
    // </ScrollView>
  );
};

export default TextFont;
