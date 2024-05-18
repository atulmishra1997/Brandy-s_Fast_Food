import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

    const [list, setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success){
            setList(response.data.data);
        } 
        else {
            toast.error('Error')
        }
    }

    const removeFood = async(foodId) => {
        let confirmation = confirm('Are you sure you want to remove');
        if (confirmation){
            var response = await axios.post(`${url}/api/food/remove`,{id:foodId});
            await fetchList();
        } else {
            await fetchList();
        }
        
        if(response.data.success){
            toast.success(response.data.message);
        }else {
            toast.error('Error');
        }
    } 

    useEffect(()=>{
        fetchList();
    },[])

    return (
        <div className='flex-col py-[40px] px-[50px] w-[100%] max-sm:py-0 max-sm:px-0'>
            <p className='text-[25px] font-semibold ps-[15px]'>All Foods List</p>
            <div className="">
                <div className="grid items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-[#cacaca] text-[13px] bg-[#f9f9f9] max-sm:hidden grid-cols-[0.5fr,2fr,1fr,1fr,0.5fr] max-sm:gap-[15px] ">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) =>{
                    return (
                        <div key={index} className=' grid items-center gap-[10px] py-[12px] px-[15px] border-[1px] border-[#cacaca] text-[13px] max-sm:grid-cols-[1fr,3fr,1fr] grid-cols-[0.5fr,2fr,1fr,1fr,0.5fr] max-sm:gap-[15px]'>
                            <img src={`${url}/images/`+item.image} alt="" className='w-[50px]' />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.price.toLocaleString('en-in',{style:'currency', currency:'INR'})}</p>
                            <p className='cursor-pointer' onClick={()=>removeFood(item._id)}>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List