import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';
import { FaUserCircle } from 'react-icons/fa';

const Logout = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

    const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    };
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
<div className="relative">
        <button
                id="dropdownInformationButton"
                onClick={toggleDropdown}
                className="text-white group"
                type="button"
            >
                <FaUserCircle className='w-6 h-6 mt-1 ' />
                
            </button>

      {isDropdownOpen && (
        <div
          id="dropdownInformation"
          className="absolute right-0 z-20 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{loggedInUser}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
            <li>
              <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Profile
              </button>
            </li>
            <li>
              <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </button>
            </li>
            <li>
            <button to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={handleLogout}
            >
              Sign out
            </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Logout;
