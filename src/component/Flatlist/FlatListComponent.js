import React, {useContext} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import MultipleStyle from '../multiple /MultipleStyle';
import XClose from '../../assets/svg-image/XClose.svg';
import ImagesContext from '../../provider/context';

const FlatListComponent = () => {
  const {images, deleteImg} = useContext(ImagesContext);
  const renderItem = ({item}) => {
    const uri = `data:${item.type};base64,${item.base64}`;

    return (
      <View key={item.fileName} style={MultipleStyle.filePathFirstWiev}>
        <Image source={{uri}} style={MultipleStyle.imageStyle} />

        <TouchableOpacity
          style={MultipleStyle.ViewTouchable}
          onPress={() => deleteImg(item)}>
          <XClose style={MultipleStyle.XCloseStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={img => img.fileName}
      horizontal= {true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListComponent;
