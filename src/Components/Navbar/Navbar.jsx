import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navlinks = 
    <>
            <Link to="/login">
            <h1 className='hidden lg:block text-[#A32CC4]'>Login</h1>
            </Link>
            <Link to="/register">
            <h1 className=' bg-[#A32CC4] p-[10px] rounded-full text-white hover:bg-white hover:text-[#A32CC4] border-2 hover:border-2 hover:border-[#A32CC4] ease-out duration-150'>Create Account</h1>
            </Link>
    </>
  return (
    <div className='p-[15px] specialFont text-center shadow-lg  flex items-center justify-between'>
        <Link to="/">
            <h1 className='text-2xl '>J.Links</h1>
        </Link>
        <div className='flex items-center gap-5 text-[14px] lg:text-xl'>
            {navlinks}
        </div>
    </div>
  )
}

export default Navbar
