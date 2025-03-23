import React from 'react'
import styles from './Layout.module.css'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <>
        
            <Sidebar/>
            <div className='ms-[250px] bg-[#F4F2EE]'>
                <div className="container">
                <Outlet/>
                </div>
            </div>
            <Footer/>
        
        
        </>
    )
}
