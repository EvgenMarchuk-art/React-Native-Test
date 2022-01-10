import React from 'react';
import {Button, FlatList, ScrollView, Text, View} from 'react-native';

import RegisterForm from './component/registerForm/RegisterForm';
import Multiple from './component/multiple /Multiple';
import DropdownComponent from './component/DropDown/DropDown';
import DropDown from './component/DropDown/DropDown';
import Index from './provider/ImageProvider';
import PopUp from './component/popUp/PopUp';

import X from './assets/svg-image/XClose.svg';
import ListOfComponents from './component/ListOfComponents';
import HandleCloseProvider from './provider/handleCloseProvider';
import ImageContextProvider from "./provider/ImageProvider";
const App = () => {
  // const Stack = createNativeStackNavigator();
  return (

      <ImageContextProvider>
        <View
          style={{
            flex: 1,
          }}>
          <ListOfComponents />
        </View>
      </ImageContextProvider>

  );
};

export default App;
