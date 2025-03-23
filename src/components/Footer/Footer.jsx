import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='bg-gray-100 ms-[250px] text-gray-800 py-6 h-[150px] flex flex-col justify-between'>
            <div className='container mx-auto flex justify-between items-center px-6'>
                <div className='font-bold text-2xl text-black flex items-center gap-3'>
                    <img src={logo} className='w-[50px]' alt="logo"/>
                    <Link to={"/"} className='hover:text-green-600 transition-colors'>Recipe</Link>
                </div>
                <p className='text-2xl text-blue-500 font-bold'>Route</p>
            </div>

            <hr className='border-gray-300 my-2'/>

            <div className='text-center text-gray-500 text-sm'>
                <p>© 2025 Nagy Osama™. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
