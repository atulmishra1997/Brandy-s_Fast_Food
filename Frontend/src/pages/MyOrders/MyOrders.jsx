import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../Context/MyContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const {url,token} = useContext(MyContext)
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
        // console.log(response.data.data);
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])

    return (
        <div className=' my-36'>
            <p className='font-bold text-2xl'>My Orders</p>
            <div className="container flex flex-col gap-5 mt-[30px]">
                {data.map((order,index)=>{
                    return(
                        <div key={index} className=' grid grid-cols-[0.5fr,2fr,1fr,1fr,2fr,1fr] items-center gap-[30px] text-sm py-[10px] px-5 border-[1px] border-orange-700 text-[#454545] max-[900px]:grid-cols-[1fr,2fr,1fr] max-[900px]:gap-y-[5px] max-[900px]:text-[12px]'>
                            <img src={assets.parcel_icon} className='w-[50px]' alt="" />
                            <p>{order.items.map((item,index)=>{
                                if (index === order.items.length-1) {
                                    return item.name+" x "+item.quantity
                                } else {
                                    return item.name+" x "+item.quantity+", "
                                }
                            })}</p>
                            <p>{order.amount.toLocaleString('en-in',{style:'currency',currency:'INR'})}</p>
                            <p>Items: {order.items.length}</p>
                            <p><span className='text-yellow-800'>&#x25cf;</span> <b className=' text-[#454545] font-medium'>{order.status}</b></p>
                            <button onClick={fetchOrders} className=' py-3 rounded bg-[#323250] text-white max-[900px]:text-[10px]'>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders