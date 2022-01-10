import React, {useState, useMemo} from 'react';
import HandleCloseContext from './handleCloseContext';

const HandleCloseProvider = ({children}) => {

  const [visible, setVisible] = useState(false);

  const ContextHandleValue = useMemo(() => {
    return {
      visible,
      setVisible,
    };
  }, [visible]);

  return (
    <HandleCloseContext.Provider value={ContextHandleValue}>
      {children}
    </HandleCloseContext.Provider>
  );
};

export default HandleCloseProvider;
