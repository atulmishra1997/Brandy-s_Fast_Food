import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='m-auto text-center font-bold' style={{marginTop:"100px", fontSize:"max(3vw, 20px)"}} id='app-download'>
            <p>For The Better Experience Download <br />BFF App</p>
            <div className="flex justify-center mt-[40px]" style={{gap:"max(2vw, 10px)"}}>
                <img src={assets.play_store} alt="" className=' cursor-pointer max-w-[180px] hover:scale-105' style={{width:"max(30vw, 120px)", transition:"0.5s"}} />
                <img src={assets.app_store} alt="" className=' cursor-pointer max-w-[180px] hover:scale-105' style={{width:"max(30vw, 120px)", transition:"0.5s"}} />
            </div>
        </div>
    )
}

export default AppDownload