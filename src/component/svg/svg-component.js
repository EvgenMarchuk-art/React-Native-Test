
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Santa from '../../assets/svg-image/Santa.svg';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const SvgComponent = () => {
  return (
    <View style={styles.container}>
      <Santa/>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://habrastorage.org/storage2/d36/922/412/d36922412b65ad20413ac591db392e09.png',
        }}
      />
     <Santa/>
    </View>
  );
};

export default SvgComponent;
