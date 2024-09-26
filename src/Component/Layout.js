// Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import {FaHome ,FaCog, FaPoll, FaRegEnvelope, FaRegFileAlt} from 'react-icons/fa'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function Layout(){
  const [sidebarToggle, setSidebarToggle] = useState(true); 
  return (
    <div className="layout">
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
       <div className="main-section">
        <aside className={`sidebar bg-gray-800 ${sidebarToggle ? '' : 'hidden'}`}>
          <Sidebar/>
        </aside>

        <main className="content" style={{border:'1px solid black',backgroundColor:'lightcyan', overflowY:'hidden',overflowX:'hidden'}}>
          <Outlet />
        </main>
      </div> 
        <ToastContainer />
    </div>



  );
};

export default Layout;


