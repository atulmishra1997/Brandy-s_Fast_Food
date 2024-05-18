import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Context/MyContext'
import './Navbar.css'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home")

    const {getTotalCartAmount, token, setToken} = useContext(MyContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }


    return (
        <div className=' flex justify-between items-center py-5 px-10 bg-[#323250] fixed top-0 left-0 right-0 z-10'>
            <Link to='/' className=' w-[8%] max-lg:w-[10%] max max-xl:w-[11%] max-2xl:w-[8%] max-md:w-[12%] max-sm:w-[12%]'><img src={assets.logo} alt="Brand Logo" style={{height:"7vh"}} /></Link>
            <ul className=' flex gap-5 text-yellow-800 text-lg font-bold lg:gap-[20px] lg:text-lg max-[900px]:gap-[15px] max-[900px]:text-base max-[750px]:hidden'>
                <Link to='/' onClick={()=> setMenu("Home")} className={menu ==="Home"?"active, border-b-2 border-yellow-800 cursor-pointer hover:text-teal-600":" cursor-pointer hover:text-teal-600"}>Home</Link>
                <a href='#explore-menu' onClick={()=> setMenu("Menu")} className={menu ==="Menu"?"active, border-b-2 border-yellow-800 cursor-pointer hover:text-teal-600":" cursor-pointer hover:text-teal-600"}>Menu</a>
                <a href='#app-download' onClick={()=> setMenu("Mobile-App")} className={menu ==="Mobile-App"?"active, border-b-2 border-yellow-800 cursor-pointer hover:text-teal-600":" cursor-pointer hover:text-teal-600"}>Mobile-App</a>
                <a href='#footer' onClick={()=> setMenu("Contact Us")} className={menu ==="Contact Us"?"active, border-b-2 border-yellow-800 cursor-pointer hover:text-teal-600":" cursor-pointer hover:text-teal-600"}>Contact Us</a>
            </ul>
            <div className='flex items-center gap-10 lg:gap-[30px] max-[900px]:gap-[20px]'>
                <img src={assets.search_icon} alt="" className='lg:w-[22px] max-[900px]:w-[20px]' />
                <div className=' relative'>
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":" absolute min-w-3 min-h-3 bg-yellow-800 rounded-3xl bottom-6 left-6"}></div>
                </div>
                {!token?<button onClick={()=> setShowLogin(true)} className=' bg-transparent text-lg text-amber-700 border-2 border-orange-700 py-2 px-7 rounded-3xl hover:bg-amber-300 lg:py-[8px] lg:px-[25px] max-[900px]:py-[7px] max-[900px]:px-[20px] max-[900px]:text-[15px]'>Sign-in</button>
                :   <div className='navbar-profile relative'>
                        <img src={assets.profile_icon} alt="profile icon" className='cursor-pointer' />
                        <ul className="nav-profile-dropdown absolute right-0 z-20 hidden">
                            <Link to={'/myorders'}>
                            <li className='flex items-center gap-[10px] text-white py-[8px] ps-3 pe-[40px] hover:text-orange-700'>
                                <img src={assets.bag_icon} alt="" className='w-[25px]' /><p>Orders</p>
                            </li>
                            </Link>
                            <hr className='mx-[10px]'/>
                            <li onClick={logout} className='flex items-center gap-[10px] text-white pt-1 pb-[15px] ps-3 pe-[40px] hover:text-orange-700'>
                                <img src={assets.logout_icon} alt="" className='w-[25px]' /><p>Logout</p>
                            </li>
                        </ul>
                    </div>}
                
            </div>
        </div>
    )
}

export default Navbar