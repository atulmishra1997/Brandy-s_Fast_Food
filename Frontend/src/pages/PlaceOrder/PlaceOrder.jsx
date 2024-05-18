import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../Context/MyContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(MyContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+20,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("An error occurred")
    }
  }

  useEffect(()=>{
    if (!token) {
      navigate('/');
      alert("Please Login and try again")
    }else if (getTotalCartAmount()===0) {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[150px]'>
      <div className="place-order-left w-[100%] max-w-[max(30%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">Delivery Information</p>
        <div className=" flex gap-[10px]">
          <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First Name' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
          <input required type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last Name' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
        </div>
        <input required type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
        <input required type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
        <div className="multi-fields flex gap-[10px]">
          <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
          <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip Code' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
          <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
        </div>
        <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded outline-yellow-700' />
      </div>
      <div className="w-[100%] max-w-[max(40%,500px)]">
      <div className="flex flex-col gap-5 flex-[1]">
                    <p className='text-2xl font-bold mb-2'>Cart  Total</p>
                    <div>
                        <div className="flex justify-between mb-5 text-gray-700">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount().toLocaleString('en-in',{style:'currency', currency:'INR'})}</p>
                        </div>
                        <hr className=' my-[10px] h-[1px] bg-[#6f7f9f] border-none' />
                        <div className="flex justify-between text-gray-700 my-5">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount()===0?getTotalCartAmount().toLocaleString('en-in',{style:'currency', currency:'INR'}):(20).toLocaleString('en-in',{style:'currency', currency:'INR'})}</p>
                        </div>
                        <hr className=' my-[10px] h-[1px] bg-[#6f7f9f] border-none' />
                        <div className="flex justify-between text-gray-800 my-5">
                            <b>Total</b>
                            <b>{getTotalCartAmount()===0?(getTotalCartAmount()).toLocaleString('en-in',{style:'currency', currency:'INR'}):(getTotalCartAmount() + 20).toLocaleString('en-in',{style:'currency', currency:'INR'})}</b>
                        </div>
                    </div>
                    <button type='submit' className=' border-none text-white bg-yellow-800 py-3 rounded w-[max(15vw,200px)]'>PROCEED TO PAYMENT</button>
                </div>
      </div>
    </form>
  )
}

export default PlaceOrder