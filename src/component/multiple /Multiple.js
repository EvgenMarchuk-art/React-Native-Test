// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useContext} from 'react';
// Import required components
// import { PermissionsAndroid
// } from 'react-native-permissions';
import {PERMISSIONS} from 'react-native-permissions';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Button,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import XClose from '../../assets/svg-image/XClose.svg';

import MultipleStyle from './MultipleStyle';
import ImagesContext from '../../provider/context';

const Multiple = ({handleClose}) => {
  const {setImages} = useContext(ImagesContext);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };



  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      includeBase64: true,
    };

    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          alert(response.errorMessage);
          return;
        }
        setImages(response.assets[0]);
      });
    }
  };

  const handleChooseImage = type => () => {
    chooseFile(type);
    handleClose();
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      selectionLimit: 0,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'others') {
        alert(response.errorMessage);
        return;
      }
      setImages(response.assets);
    });
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
