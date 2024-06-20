import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Dashboard from './Components/Dashboard';
import AppContextProvider from './Context/AppContext';
import Login from './Pages/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register';
import PageViews from './Pages/PageViews';
import AdminProfile from './Pages/AdminProfile';
import PostUpload from './Pages/PostUpload';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
    return (
        <AppContextProvider>
            <Navbar />
            <Sidebar />
            <div className="App">
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/admindashboard' element={<Dashboard />} />
                    <Route path='/adminlogin' element={<Login />} />
                    <Route path='/adminregister' element={<Register />} />
                    <Route path='/pageviews' element={<PageViews />} />
                    <Route path='/adminProfile' element={<AdminProfile />} />
                    <Route path='/postUpload' element={<PostUpload />} />
                </Routes>
            </div>
        </AppContextProvider>
    );
}

export default App;
