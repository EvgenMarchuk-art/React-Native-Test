import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Button, Dimensions, Text, View} from 'react-native';

import Gradient from '../gradient/Gradient';
import TextFont from '../textFont/TextFont';
import TextGradient from '../textGradient/TextGradient';

import SvgComponent from '../svg/svg-component';
import RegisterForm from '../registerForm/RegisterForm';
import Multiple from '../multiple /Multiple';
import DropDown from '../DropDown/DropDown';
import NavigationStyle from './NavigationStyle';
import MultipleStyle from "../multiple /MultipleStyle";

function HomeScreen() {
  const nav = useNavigation();

  return (
    <View >
      <RegisterForm />
      <DropDown/>
      <Button
        title={'Upload photo'}
        onPress={() => {
          nav.navigate('Upload photo');
        }}
      />
    </View>
  );
}

function MultipleScreen() {

  const nav = useNavigation();

  return (
    <View
      style={MultipleStyle. MultipleScreenFirstViewStyle}>
      <Multiple />

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
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Upload photo" component={MultipleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
