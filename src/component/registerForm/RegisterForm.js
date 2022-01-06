import React, {Component, useState, useRef} from 'react';

import {
  SafeAreaView,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import Eye from '../../assets/svg-image/Eye.svg';

import RegisterFormStyle from './RegisterFormStyle';

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
    <View style={RegisterFormStyle.FirstViewStyle}>
      <SafeAreaView>
        <TextInput
          style={RegisterFormStyle.input}
          onChangeText={onChangeText}
          placeholder="Name"
        />
        <TextInput
          style={RegisterFormStyle.input}
          onChangeText={onChangeText}
          placeholder="Surname"
        />

        <TextInput
          style={RegisterFormStyle.input}
          placeholder="НОМЕР ТЕЛЕФОНА"
          keyboardType="numeric"
          onChangeText={text => setPhone(text)}
          value={onChangePhone(phone)}
        />

        <View style={RegisterFormStyle.passStyle}>
          <TextInput
            placeholder="Пароль"
            secureTextEntry={passwordShown}
            keyboardType="numbers-and-punctuation"
            style={RegisterFormStyle.TextInputStyle}
          />
          <TouchableWithoutFeedback onPress={() => togglePasswordVisibility()}>
            <Eye style={RegisterFormStyle.EyeStyle} />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UselessTextInput;
