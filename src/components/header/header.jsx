import React from 'react'
import Logo from './logo'
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className='w-full bg-[#6B3CC9] text-white'>
        <div className='flex justify-between items-center py-4 md:py-5 px-5 md:px-10 lg:px-20'>
            {/* Logo */}
            <div className='flex gap-2 items-center'>
                <Logo/>
                <p className='text-3xl uppercase font-semibold'>AT Digital</p>
            </div>

            {/* Navv Links */}
            <div className='gap-5 tracking-widest hidden md:flex'>
                <p>SERVICES</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
                <p>CAREERS</p>
            </div>

            <div className='md:hidden cursor-pointer'>
                <Menu className='w-9 h-9'/>
            </div>
        </div>
    </div>
  )
}

export default Header