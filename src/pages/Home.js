import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';

function Home() {
    // const [loggedInUser, setLoggedInUser] = useState('');
    // const navigate = useNavigate();
    // useEffect(() => {
    //     setLoggedInUser(localStorage.getItem('loggedInUser'))
    // }, [])

    // const handleLogout = (e) => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('loggedInUser');
    //     handleSuccess('User Loggedout');
    //     setTimeout(() => {
    //         navigate('/login');
    //     }, 1000)
    // }



    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <img src='/assets/Homelogo.png' alt='Welcome' style={{ height: '400px', width: '400px' }} /> 
        </div>
    )
}

export default Home
