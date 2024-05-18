import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='mt-24 bg-[#323250] flex flex-col items-center gap-5 text-[#d9d9d9]' style={{padding:"20px 8vw", paddingTop:"80px"}} id='footer'>
            <div className='w-[100%] grid gap-[80px] max-md:flex max-md:flex-col max-md:gap-[35px]' style={{gridTemplateColumns:"2fr 1fr 1fr"}}>
                <div className=" flex flex-col items-start gap-5">
                    <img src={assets.logo} alt="" className='w-[12%] max-md:w-[24%]'/>
                    <p className=' max-md:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab sint modi voluptates maiores dolorem assumenda ut natus nostrum enim maxime repudiandae culpa sequi alias, doloremque ipsa ducimus animi accusantium.</p>
                    <div className="flex gap-2 mt-3">
                        <a className='cursor-pointer'  href="https://www.facebook.com/profile.php?id=100091441811251" target='_blank'><img src={assets.facebook_icon} alt="" className=' size-10' /></a>
                        <a className='cursor-pointer'  href="https://www.linkedin.com/in/atulmishra1997/" target='_blank'><img src={assets.linkedin_icon} alt="" className='size-10'/></a>
                        <a className='cursor-pointer'  href="https://twitter.com/brandys_vines1" target='_blank'><img src={assets.twitter_icon} alt="" className='size-10' /></a>
                        <a className='cursor-pointer'  href="https://github.com/atulmishra1997" target='_blank'><img src={assets.github_icon} alt="" className='size-10' /></a>
                    </div>
                </div>
                <div className="">
                    <p className='mb-[10px] text-2xl font-bold'>COMPANY</p>
                    <ul>
                        <a href="/"><li className='mb-[10px] cursor-pointer'>Home</li></a>
                        <a href="/"><li className='mb-[10px] cursor-pointer'>About Us</li></a>
                        <a href="/"><li className='mb-[10px] cursor-pointer'>Delivery</li></a>
                        <a href="/"><li className='mb-[10px] cursor-pointer'>Privacy Policy</li></a>
                    </ul>
                </div>
                <div className="">
                <p className='mb-[10px] text-2xl font-bold'>Get in Touch</p>
                    <ul>
                        <a href="tel:+919120568942"><li className='mb-[10px]'>+91-9120568942</li></a>
                        <a href="mailto:atulmishra1997@hotmail.com"><li className='mb-[10px]'>atulmishra1997@hotmail.com</li></a>
                    </ul>
                </div>
            </div>
            <hr className='w-[100%] h-[2px] my-5 border-none bg-yellow-800'/>
            <p className=' max-md:text-center'>Copyright 2024 &copy; Brandy'sFastFood.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer