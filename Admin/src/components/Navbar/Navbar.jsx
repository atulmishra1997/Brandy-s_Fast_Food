import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
        <>
        <div className=' flex justify-between items-center py-5 px-10 bg-[#323250] fixed top-0 left-0 right-0 z-10' >
            <img className=' w-[5.5%] max-lg:w-[10%] max-xl:w-[11%] max-2xl:w-[8%] max-md:w-[12%] max-sm:w-[12%]'  style={{height:"7vh"}} src={assets.logo} alt="" />
            <img className='w-10 rounded-full' src={assets.profile_image} alt="" />
        </div>
        <hr className=' mt-24  border-none bg-[#323250] h-[1px]'/>
        </>
    )
}

export default Navbar