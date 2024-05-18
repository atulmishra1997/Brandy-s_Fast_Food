import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useEffect } from 'react';
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

    const [orders,setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url+"/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data.data);
        } else {
            toast.error('An Error Occured')
        }
    }

    const statusHandler = async (event,orderId) => {
        const response = await axios.post(url+"/api/order/status",{orderId,status:event.target.value})
        if (response.data.success) {
            await fetchAllOrders();
        }
    }

    useEffect(() => {
        fetchAllOrders();
    },[])

    return (
        <div className=' ms-16 my-12 max-sm:ms-2 max-sm:my-0 max-sm:'>
            <p className=' text-2xl font-bold'>Order Page</p>
            <div className="">
                {orders.map((order,index)=>(
                    <div key={index} className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr] items-start gap-[30px] border-[2px] border-yellow-800 p-5 my-[30px] text-[14px] text-[#505050] max-lg:text-[12px] max-lg:grid-cols-[0.5fr,3.5fr,0.5fr] max-lg:py-[15px] max-lg:px-2 max-lg:me-2'>
                        <img src={assets.parcel_icon} alt="" className=' max-lg:w-10' />
                        <div>
                            <p className='font-semibold'>
                                {order.items.map((item,index)=>{
                                    if (index === order.items.length - 1) {
                                        return item.name + " x " + item.quantity
                                    }else {
                                        return item.name + " x " + item.quantity + ", "
                                    }
                                })}
                            </p>
                            <p className='font-semibold mt-4 mb-[6px]'>{order.address.firstName+" "+order.address.lastName}</p>
                            <div className='mb-[10px]'>
                                <p>{order.address.street+", "}</p>
                                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>

                            </div>
                            <p className=''>{order.address.phone}</p>
                        </div>
                        <p>Items : {order.items.length}</p>
                        <p>{order.amount.toLocaleString('en-in',{style:'currency',currency:'INR'})}</p>
                        <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='border-[1px] border-orange-700 w-[max(10vw,120px)] p-[10px] outline-none bg-[#323250] text-white rounded-md max-lg:text-[12px] max-lg:p-[5px]'>
                            <option value="Food Processing">Food Processing</option>
                            <option value="Out for delivery">Out for delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders