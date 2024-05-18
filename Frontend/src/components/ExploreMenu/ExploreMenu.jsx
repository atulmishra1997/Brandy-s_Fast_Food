import React from 'react'
import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='flex flex-col gap-5' id='explore-menu'>
            <p className=' mt-3 text-3xl font-bold text-orange-800'>Explore Our Menu</p>
            <p className=' max-lg:text-[14px] max-w-[60%] text-[#808080] text-[18px] max-[1050px]:max-w-[100%]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to provide tasty and hygenic food and experience.</p>
            <div className="flex justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll p-[12px]" id='explore-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev=> prev===item.menu_name?'All':item.menu_name)} key={index} className=' rounded-full p-4 hover:scale-105' style={{boxShadow:"2px 2px 10px #000000", transition:"0.5s"}}>
                            <img src={item.menu_image} alt="" className={category===item.menu_name?"active, border-4 p-[2px] border-orange-700 w-[7.5vw] min-w-20 cursor-pointer rounded-full":"w-[7.5vw] min-w-20 cursor-pointer rounded-full"} style={{transition:"0.2s"}} />
                            <p className='mt-[10px] text-[#747474] cursor-pointer'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-[10px] h-[2px] bg-yellow-800 border-none'/>
        </div>
    )
}

export default ExploreMenu