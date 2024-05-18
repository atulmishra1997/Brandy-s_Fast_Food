import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-[100vh] border-[1.5px] border-[#323250] border-t-0 text-[max(1vw,10px)]'>
            <div className="sidebar-options pt-[50px] ps-[20%] flex flex-col gap-5">
                <NavLink to='/add' id='sidebar-option' className="flex items-center gap-3 border-[1px] border-[#323250] border-e-0 py-2 px-[10px] cursor-pointer " style={{borderRadius:"3px 0px 0px 3px"}}>
                    <img src={assets.add_icon} alt="" />
                    <p className=' max-[900px]:hidden'>Add Items</p>
                </NavLink>
                <NavLink to='/list' id='sidebar-option' className="flex items-center gap-3 border-[1px] border-[#323250] border-e-0 py-2 px-[10px] cursor-pointer " style={{borderRadius:"3px 0px 0px 3px"}}>
                    <img src={assets.order_icon} alt="" />
                    <p className=' max-[900px]:hidden'>List Items</p>
                </NavLink>
                <NavLink to='/orders' id='sidebar-option' className="flex items-center gap-3 border-[1px] border-[#323250] border-e-0 py-2 px-[10px] cursor-pointer " style={{borderRadius:"3px 0px 0px 3px"}}>
                    <img src={assets.order_icon} alt="" />
                    <p className=' max-[900px]:hidden'>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar