import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'
import Footer from '../pages/Footer'


const MainLayout = () => {

  return (
    <div className='bg-gray-200 dark:bg-gray-800 w-full min-h-screen'>
       
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
        
    </div>
  )
}

export default MainLayout
