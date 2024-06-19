import React, { createContext, useState } from 'react'

export const AppContext = createContext({});

const AppContextProvider = (props) => {

    const [adminLogin, setAdminLogin] = useState(true);

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };

    const contextValue = {
        adminLogin, setAdminLogin,
        isSidebarVisible, setIsSidebarVisible, toggleSidebar

    }

  return (
    <AppContext.Provider value={contextValue} >
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;