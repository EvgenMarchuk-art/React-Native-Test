import React, {useContext, useMemo} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import MultipleStyle from '../multiple /MultipleStyle';
import XClose from '../../assets/svg-image/XClose.svg';
import ImagesContext from '../../provider/ImageProvider/imageContext';
import RegisterForm from '../registerForm/RegisterForm';
import DropdownComponent from '../DropDown/DropDown';
import PopUp from '../popUp/PopUp';
import FlatListComponent from '../Flatlist/FlatListComponent';
import HandleCloseProvider from '../../provider/handleCloseProvider';

const ListOfComponents = () => {
  const {deleteImg} = useContext(ImagesContext);
  const renderItem = ({item}) => {
    const uri = `data:${item.type};base64,${item.base64}`;
    return (
      <View style={MultipleStyle.filePathFirstWiev}>
        <Image
          key={item.fileName}
          source={{uri}}
          style={MultipleStyle.imageStyle}
        />

        <TouchableOpacity
          style={MultipleStyle.ViewTouchable}
          onPress={() => deleteImg(item)}>
          <XClose style={MultipleStyle.XCloseStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  const header = useMemo(() => {
    return (
      <>
        <RegisterForm />
        <DropdownComponent />
        <HandleCloseProvider>
        <PopUp />
        </HandleCloseProvider>
      </>
    );
  }, []);

  return (
    <FlatList
      ListHeaderComponent={header}
      ListFooterComponent={<FlatListComponent />}
      data={[]}
      renderItem={renderItem}
      keyExtractor={img => img.fileName}
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

export default ListOfComponents;
