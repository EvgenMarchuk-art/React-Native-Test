import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import { Text, View } from "react-native";

const TextGradient = () => {
  return (
    <MaskedView
      style={{flex: 1, flexDirection: 'row', height: '100%'}}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Basic Mask
          </Text>
        </View>
      }>
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <View style={{flex: 1, height: '100%', backgroundColor: '#784376'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
      <View style={{flex: 1, height: '100%', backgroundColor: '#e1b1e1'}} />
    </MaskedView>
  );
};

export default TextGradient;
