import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Layout from './Component/Layout'
import Blog from './pages/Blog'
import Report from './pages/Report'
import Inbox from './pages/Inbox'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className="App h-screen overflow-hidden">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* Protected routes with layout */}
        <Route element={<PrivateRoute element={<Layout />} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/report' element={<Report />} />
          <Route path='/inbox' element={<Inbox />} />
          {/* <Route path='/settings' element={<Settings />} /> */}
        </Route>
  
        

      </Routes>
    </div>
  );
}

export default App;
