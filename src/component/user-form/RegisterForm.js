import React, {Component, useState, useRef} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Styles from '../../Style';
import Eye from '../../assets/svg-image/Eye.svg';

const UselessTextInput = () => {
  const [text, onChangeText] = useState('');
  const [phone, setPhone] = useState('');

  const [passwordShown, setPasswordShown] = useState(true);

  function togglePasswordVisibility() {
    setPasswordShown(!passwordShown);
  }

  function onChangePhone(phone) {
    const input = phone.replace(/\D/g, '').substring(0, 10);

    const first = input.substring(0, 3);
    console.log(first);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
    if (input.length > 6) {
      return `(${first}) ${middle}-${last}`;
    } else if (input.length > 3) {
      return `(${first}) ${middle}`;
    } else if (input.length >= 0) {
      return input;
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <SafeAreaView>
        <TextInput
          style={Styles.input}
          onChangeText={onChangeText}
          placeholder="Name"
        />
        <TextInput
          style={Styles.input}
          onChangeText={onChangeText}
          placeholder="Surname"
        />

        <TextInput
          style={Styles.input}
          placeholder="НОМЕР ТЕЛЕФОНА"
          keyboardType="numeric"
          onChangeText={text => setPhone(text)}
          value={onChangePhone(phone)}
        />

        <View style={Styles.passStyle}>
          <TextInput
            placeholder="Пароль"
            secureTextEntry={passwordShown}
            keyboardType="numbers-and-punctuation"
            style={{flex: 1}}
          />
          <TouchableWithoutFeedback onPress={() => togglePasswordVisibility()}>
            <Eye style={{width: 30, height: 30}} />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UselessTextInput;
