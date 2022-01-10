import React, {useState, useMemo} from 'react';
import ImagesContext from './context';

const ImagesProvider = ({children}) => {


  const [images, setImages] = useState([]);

  const deleteImg = img => {
    setImages(prevImages => {
      return prevImages.filter(image => image.uri !== img.uri);
    });
  };

  const contextValue = useMemo(() => {
    return {
      setImages,
      images,
      deleteImg,
    };
  }, [images]);

  return (
    <ImagesContext.Provider value={contextValue}>
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesProvider;
