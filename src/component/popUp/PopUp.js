// Example of Popup Dialog in React Native
// https://aboutreact.com/popup-dialog/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Button,
} from 'react-native';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  ScaleAnimation,
} from 'react-native-popup-dialog';

import PopUPStyle from './PopUPStyle';
import Multiple from '../multiple /Multiple';

const PopUp = () => {
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);

  return (
    <SafeAreaView>
      <View>
        {/* For Scale Animation Dialog */}
        <TouchableHighlight
          style={PopUPStyle.buttonStyle}
          onPress={() => setScaleAnimationDialog(true)}>
          <Text style={PopUPStyle.buttonTextStyle}>Upload Photo</Text>
        </TouchableHighlight>

        <Dialog
          onTouchOutside={() => {
            setScaleAnimationDialog(false);
          }}
          width={0.9}
          visible={scaleAnimationDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            setScaleAnimationDialog(false);
            console.log('onHardwareBackPress');
            return true;
          }}
          dialogTitle={<DialogTitle title="Uploud Photo" hasTitleBar={false} />}
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                setScaleAnimationDialog(false);
              }}
              key="button-1"
            />,
          ]}>
          <DialogContent
            style={PopUPStyle.FirstDialogContentStyle}>
            <View
              style={PopUPStyle.DialogContentFirstViewStyle}>
              <Multiple />
            </View>

            <Button
              title="Close"
              onPress={() => {
                setScaleAnimationDialog(false);
              }}
              key="button-1"
            />
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};

export default PopUp;

