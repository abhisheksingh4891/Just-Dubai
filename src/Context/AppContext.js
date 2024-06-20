import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext({});

const AppContextProvider = (props) => {
    const navigate = useNavigate();

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

    const handleLogout = async () => {
        await localStorage.removeItem("admin");
        setAdminLogin(false);
        navigate('/');
    };

    const contextValue = {
        adminLogin,
        setAdminLogin,
        isSidebarVisible,
        setIsSidebarVisible,
        toggleSidebar,
        handleLogout
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
