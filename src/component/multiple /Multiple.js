// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useContext} from 'react';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import XClose from '../../assets/svg-image/XClose.svg';

import MultipleStyle from './MultipleStyle';
import ImagesContext from '../../provider/context';
import {addLog} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import async from 'async';

const Multiple = ({handleClose}) => {
  const {setImages} = useContext(ImagesContext);

  const requestCameraPermission = async () => {
    const res = await request(PERMISSIONS.ANDROID.CAMERA);
    if (res === RESULTS.GRANTED) {
      console.log('Камера permission granted.');
    } else {
      console.log('Камера perrmission denied.');
    }
  };

  const requestExternalWritePermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    return result === RESULTS.GRANTED;
  };

  const openCamera = options => {
    return new Promise((resolve, reject) => {
      launchCamera(options, response => {
        if (response.didCancel) {
          reject(new Error('User cancelled camera picker'));
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          reject(new Error('Cammera not available on device'));
          return;
        } else if (response.errorCode === 'permission') {
          reject(new Error('Permission not satisfied'));
          return;
        } else if (response.errorCode === 'others') {
          reject(new Error(response.errorMessage));
          return;
        }
        resolve(response.assets);
      });
    });
  };

  const captureImage = async function (type) {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 60, //Video max duration in seconds
      includeBase64: true,
    };

    try {
      await requestCameraPermission();

      const assets = await openCamera(options);
      console.log(assets);
      setImages(assets);
    } catch (e) {}
  };

  const handleChooseImage = type => () => {
    chooseFile(type);
    handleClose();
  };

  const openGallery = options => {
    return new Promise((resolve, reject) => {
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          reject(new Error('User cancelled camera picker'));
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          reject(new Error('Cammera not available on device'));
          return;
        } else if (response.errorCode === 'permission') {
          reject(new Error('Permission not satisfied'));
          return;
        } else if (response.errorCode === 'others') {
          reject(new Error(response.errorMessage));
          return;
        }
        resolve(response.assets);
      });
    });
  };

  const chooseFile = async type => {
    let options = {
      mediaType: type,
      maxWidth: 1024,
      maxHeight: 768,
      quality: 1,
      selectionLimit: 0,
      includeBase64: true,
    };

    try {
      await requestExternalWritePermission();

      const assets = await openGallery(options);
      setImages(assets);
    } catch (e) {}
  };

  return (
    <SafeAreaView style={MultipleStyle.SafeAreaViewStyle}>
      <View style={MultipleStyle.container}>
        <Text style={MultipleStyle.textStyle} />
        <TouchableOpacity
          activeOpacity={0.5}
          style={MultipleStyle.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={MultipleStyle.textStyle}>Launch Camera for Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={MultipleStyle.buttonStyle}
          onPress={handleChooseImage('photo')}>
          <Text style={MultipleStyle.textStyle}>Choose Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Multiple;
