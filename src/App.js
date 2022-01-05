import React from 'react';
import { Button, FlatList, ScrollView, Text, View } from "react-native";

import RegisterForm from './component/registerForm/RegisterForm';
import Multiple from './component/multiple /Multiple';
import DropdownComponent from './component/DropDown/DropDown';
import DropDown from './component/DropDown/DropDown';
import PopUp from './component/popUp/PopUp';

import X from './assets/svg-image/XClose.svg';
import FlatListComponent from "./component/FlatListComponent";

const App = () => {
  // const Stack = createNativeStackNavigator();
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 100,
        alignItems: 'center',
      }}>
      <RegisterForm />
      <View style={{width: 360}}>
        <DropdownComponent />
      </View>
      <PopUp />
      <FlatListComponent/>
      {/*<Multiple />*/}
      {/*<X/>*/}
    </View>
  );
};

export default App;
