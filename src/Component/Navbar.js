import React,{ useState } from 'react';
import { FaBars, FaBell, FaSearch, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {  handleSuccess } from '../utils';
import { useEffect } from 'react';
import Logout from './Logout';

const Navbar = ({sidebarToggle,setSidebarToggle}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSidebarToggle(!sidebarToggle); 
  };

 const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setTimeout(() => {
        navigate('/login');
    }, 1000)
}

  return (
     <div className={`w-full`}>
         <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
         <div className='flex item-center text-xl justify-center'>
            <span  className='text-3x text-white font-bold mx-4'> Labguru 2020</span>
            <div onClick={handleToggle} className='text-white me-4 cursor-pointer mt-1'>
            {isOpen ? <FaTimes /> : <FaBars />}
           </div>
            <span className='text-white font-semibold'></span>
         </div>
         <div className='flex item-center gap-x-5' >
           <div className='relative md:w-65'>
              <span className='relative md:absolute inset-y-0 left-0 flexitem-center pl-2'>
                <button className='p-1 focus-outline-none text-white md:text-black'> <FaSearch/> </button> </span>
              <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow outline:none hidden md:block'/>
           </div>
           <div className='text-white'><FaBell className='w-6 h-6'/></div>
         <div className='relative'>
          <Logout/>
         </div>
         </div>
    </nav>
     </div>
    
  );
};

export default Navbar;
