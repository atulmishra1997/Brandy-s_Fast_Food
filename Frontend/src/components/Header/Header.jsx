import React from 'react'
import { MainCarouselData } from './main-carousel/MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Header = () => {
    const items = MainCarouselData.map((item)=> <img className='cursor-pointer rounded-3xl border-2 border-orange-700' role='presentation' style={{width:"98.8%",objectFit:"contain"}} src={item.image} alt=''/>)
    return (
        <div className='header pt-40'>
            <div className="">
            <AliceCarousel
                autoPlay
                // autoPlayControls
                // autoPlayStrategy="none"
                autoPlayInterval={2000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={true}
                // disableDotsControls
                disableButtonsControls
                items={items} />
                <div className=' justify-end flex'>
                    <button className=' bg-transparent text-lg text-amber-700 border-2 border-orange-700 py-2 px-7 rounded-3xl hover:bg-amber-300'>View Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Header