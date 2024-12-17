import React, { createContext, useContext, useState} from 'react';
import PropertiesMenu from './components/common/PropertiesMenu/PropertiesMenu';


const AppContext = createContext();

export const AppProvider =({ children }) =>{
    const [propertyMenu, setPropertyMenu] = useState(null);


    const closeProperties = () =>{
      setPropertyMenu(null);
    }
    const openProperties = (type, properties) =>{
      console.log('Open task '+type)
        setPropertyMenu(<PropertiesMenu properties={properties} type={type} closeProperties={closeProperties} />);
    }

    return(
      <AppContext.Provider value={{propertyMenu, closeProperties, openProperties}}>
        {children}
      </AppContext.Provider>
    );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContext;