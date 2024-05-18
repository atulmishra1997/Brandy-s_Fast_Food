import React, { useContext } from 'react';
import { MyContext } from '../../Context/MyContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const {cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(MyContext);

    const navigate = useNavigate();

    return (
        <div className=' pt-36'>
            <div className="">
                <div className="grid items-center text-gray-700" style={{gridTemplateColumns:"1fr 1.5fr 1fr 1fr 1fr 0.5fr", fontSize:"max(1vw, 12px)"}}>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr className=' h-[1px] bg-[#6f7f9f] border-none' />
                {food_list.map((item,index)=>{
                    if(cartItems[item._id]>0)
                    {
                        return (
                            <div>
                                <div className='my-[10px] text-black grid items-center' style={{gridTemplateColumns:"1fr 1.5fr 1fr 1fr 1fr 0.5fr", fontSize:"max(1vw, 12px)"}}>
                                    <img src={url+"/images/"+item.image} className='w-[50px]' alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price.toLocaleString('en-in', {style:'currency', currency:'INR'})}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{parseInt(item.price*cartItems[item._id]).toLocaleString('en-in', {style:'currency', currency:'INR'})}</p>
                                    <p className=' bi-x-lg cursor-pointer' onClick={()=>{
                                        let conf = confirm('Are you sure you want to remove this item?');
                                        if(conf==true){
                                            removeFromCart(item._id);
                                        }
                                    }}></p>
                                </div>
                                <hr className=' h-[1px] bg-[#6f7f9f] border-none' />
                            </div>
                        )
                    }
                })}
            </div>
            <div className='mt-[80px] flex justify-between max-md:flex-col-reverse' style={{gap:"max(12vw,20px)"}}>
                <div className="flex flex-col gap-5 flex-[1]">
                    <p className=' text-2xl font-bold'>Cart  Total</p>
                    <div>
                        <div className="flex justify-between text-gray-700">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount().toLocaleString('en-in',{style:'currency', currency:'INR'})}</p>
                        </div>
                        <hr className=' my-[10px] h-[1px] bg-[#6f7f9f] border-none' />
                        <div className="flex justify-between text-gray-700">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount()===0?getTotalCartAmount().toLocaleString('en-in',{style:'currency', currency:'INR'}):(20).toLocaleString('en-in',{style:'currency', currency:'INR'})}</p>
                        </div>
                        <hr className=' my-[10px] h-[1px] bg-[#6f7f9f] border-none' />
                        <div className="flex justify-between text-gray-800">
                            <b>Total</b>
                            <b>{getTotalCartAmount()===0?(getTotalCartAmount()).toLocaleString('en-in',{style:'currency', currency:'INR'}):(getTotalCartAmount() + 20).toLocaleString('en-in',{style:'currency', currency:'INR'})}</b>
                        </div>
                    </div>
                    <button className={getTotalCartAmount()===0?' hidden':' border-none text-white bg-yellow-800 py-3 rounded w-[max(15vw,200px)]'} onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className='flex-[1] max-md:justify-start'>
                    <div>
                        <p className='text-gray-700'>If you have a promocode, Enter it here.</p>
                        <div className=' mt-[10px] flex justify-between items-center rounded bg-[#eaeaea]'>
                            <input type="text" className=' bg-transparent border-none outline-none ps-[10px]' placeholder='Promocode Here'/>
                            <button className=' w-[max(10vw,150px)] py-3 px-[5px] bg-black text-white rounded'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart