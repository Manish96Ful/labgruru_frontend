import React from 'react'
import { Link } from 'react-router-dom'
 import {FaHome ,FaCog, FaPoll, FaRegEnvelope, FaRegFileAlt} from 'react-icons/fa'
function Sidebar(){
  return (
      <ul className='text-white font-bold h-full'>
        <li className=' mb-2 rounded hover:shadow  hover:bg-blue-500 py-2'>
            <Link to='/home' className='px-3'>
               <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
              Home
            </Link>
        </li>
        <li className=' mb-2 rounded hover:shadow  hover:bg-blue-500 py-2'>
           <Link to='/blog' className='px-3'>
               <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegFileAlt>
              blog
            </Link>
        </li>
        <li className=' mb-2 rounded hover:shadow  hover:bg-blue-500 py-2'>
            <Link to='/report' className='px-3'>
               <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
              Report
            </Link>
        </li>
        <li className=' mb-2 rounded hover:shadow  hover:bg-blue-500 py-2'>
            <Link to='/inbox' className='px-3'>
               <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope>
              inbox
            </Link>
        </li>
        <li className=' mb-2 rounded hover:shadow  hover:bg-blue-500 py-2'>
            <Link to='#' className='px-3'>
               <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
              setting
            </Link>
        </li>
        
      </ul>
  )
}

export default Sidebar