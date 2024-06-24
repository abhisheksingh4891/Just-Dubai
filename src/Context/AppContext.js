import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

const AppContextProvider = (props) => {
    

    const [adminLogin, setAdminLogin] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("admin");
        if (isLoggedIn) {
            setAdminLogin(true);
        }
    }, []);


    const contextValue = {
        adminLogin,
        setAdminLogin,
        isSidebarVisible,
        setIsSidebarVisible,
        toggleSidebar,
        
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
