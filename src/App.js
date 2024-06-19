import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Dashboard from './Components/Dashboard';
import AppContextProvider, { AppContext } from './Context/AppContext';
import Login from './Pages/Login';
import Navbar from './Components/Navbar/Navbar';
import { useContext } from 'react';
import Register from './Pages/Register';

function App() {

  const { toggleSidebar} = useContext(AppContext);

  return (
    <AppContextProvider>
      <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/admindashboard' element={<Dashboard/>} />
          <Route path='/adminlogin' element={<Login/>} />
          <Route path='/adminregister' element={<Register/>} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
