import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View , StyleSheet} from 'react-native';

const Gradient = ({children}) =>{
  return (
    <View style={{flex: 1 }}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}>
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 15,

  },
});

export default Gradient;
