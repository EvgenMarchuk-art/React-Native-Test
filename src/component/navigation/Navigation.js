import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Button, Dimensions, Text, View} from 'react-native';

import Gradient from '../gradient/Gradient';
import TextFont from '../textFont/TextFont';
import TextGradient from '../textGradient/TextGradient';

import SvgComponent from '../svg/svg-component';

function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={'Gradient'}
        onPress={() => {
          nav.navigate('Gradient');
        }}
      />

      <Button
        title={'textGradient'}
        onPress={() => {
          nav.navigate('textGradient');
        }}
      />

      <Button
        title={'TextFont'}
        onPress={() => {
          nav.navigate('TextFont');
        }}
      />

      <Button
        title={'SvgComponent'}
        onPress={() => {
          nav.navigate('SvgComponent');
        }}
      />
    </View>
  );
}

function GradientScreen() {
  const nav = useNavigation();
  const width1 = Dimensions.get('window').width;
  const height1 = Dimensions.get('window').height;
  return (
    <View
      style={{
        width: width1,
        height: height1,
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text>Gradient Screen</Text>
      <Gradient>
        <Text> This is Gradient! </Text>
      </Gradient>

      <Button
        title={'Home'}
        onPress={() => {
          nav.navigate('Home');
        }}
      />
    </View>
  );
}

function TextGradientScreen() {
  const nav = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Text Gradient Screen</Text>

      <TextGradient />

      <Button
        title={'Home'}
        onPress={() => {
          nav.navigate('Home');
        }}
      />
    </View>
  );
}

function TextFontScreen() {
  const nav = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Text Font Screen</Text>

      <TextFont />

      <Button
        title={'Home'}
        onPress={() => {
          nav.navigate('Home');
        }}
      />
    </View>
  );
}

function SvgScreen() {
  const nav = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Svg Screen</Text>

      <SvgComponent />

      <Button
        title={'Home'}
        onPress={() => {
          nav.navigate('Home');
        }}
      />
    </View>
  );
}

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gradient" component={GradientScreen} />
        <Stack.Screen name="textGradient" component={TextGradientScreen} />
        <Stack.Screen name="TextFont" component={TextFontScreen} />
        <Stack.Screen name="SvgComponent" component={SvgScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
