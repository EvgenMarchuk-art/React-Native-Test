import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownStyle from './DropDownStyle';

const cities = [...new Array(20)].map((_, index) => {
  return {
    label: `City${index + 1}`,
    value: 1,
  };
});

const DropdownComponent = () => {
  console.log(cities);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[DropDownStyle.label, isFocus && {color: 'blue'}]}>
          Select cities
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={DropDownStyle.container}>
      {renderLabel()}

      <Dropdown
        style={[DropDownStyle.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={DropDownStyle.placeholderStyle}
        selectedTextStyle={DropDownStyle.selectedTextStyle}
        inputSearchStyle={DropDownStyle.inputSearchStyle}
        data={cities}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select cities' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;
