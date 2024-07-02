import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const AppContext = createContext({});

const AppContextProvider = (props) => {
    
    const navigate = useNavigate();
    const [adminLogin, setAdminLogin] = useState(false);
    const [superAdminLogin, setSuperAdminLogin] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const isLoggedIn = Cookies.get("admin");
        if (isLoggedIn) {
            setAdminLogin(true);
        }
    }, []);

    useEffect(() => {
        const isSuperAdmin = Cookies.get("superadmin");
        if (isSuperAdmin==="true") {
            setSuperAdminLogin(true)
        }
    }, []);

    const handleLogout = async () => {
        await Cookies.remove("admin");
        Cookies.remove("superadmin")
        toast.error("User Logged Out");
        setTimeout(() => {
          setAdminLogin(false);
          setSuperAdminLogin(false);
          navigate("/");
        }, 1000);
      };

    const contextValue = {
        adminLogin,
        setAdminLogin,
        isSidebarVisible,
        setIsSidebarVisible,
        toggleSidebar,
        handleLogout,
        superAdminLogin, setSuperAdminLogin
        
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
