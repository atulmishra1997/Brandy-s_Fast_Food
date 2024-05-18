import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from "axios";
import { toast } from 'react-toastify';


const Add = ({url}) => {
    
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('description',data.description);
        formData.append('price',Number(data.price));
        formData.append('category',data.category);
        formData.append('image',image);
        const response = await axios.post(`${url}/api/food/add`,formData);
        if (response.data.success){
            setData({
                name: '',
                description: '',
                price: '',
                category: 'Salad'
            })
            setImage(false)
            toast.success(response.data.message)
        } 
        else {
            toast.error(response.data.message)
        }
    }
    
    return (
        <div className='w-[70%] ms-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]'>
            <form className="flex-col gap-5" onSubmit={onSubmitHandler}>
                <div className="flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img className='ms-[10px] w-[120px]' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    </label>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="image" hidden required />
                </div>
                <div className="flex-col w-[max(40%,280px)] mt-4">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} className=' w-[max(40%,280px)] max-[430px]:w-[max(30%,230px)] p-[10px] outline outline-2' placeholder='Product Name' name='name' required/>
                </div>
                <div className="flex-col w-[max(40%,280px)] mt-4">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} className=' w-[max(40%,280px)] max-[430px]:w-[max(30%,230px)] p-[10px] outline outline-2' rows={6} placeholder='Write Description Here' name='description'></textarea>
                </div>
                <div className='flex gap-[25px] max-[430px]:gap-[10px] mt-4'>
                    <div className=" flex-col">
                        <p>Product Category</p>
                        <select name='category' className='max-w-[120px] p-[10px] outline outline-2' onChange={onChangeHandler}>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Desert">Desert</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure-Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className=" flex-col">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} className='max-w-[120px] p-[10px] outline outline-2 max-[430px]:max-w-[100px]' value={data.price.toLocaleString('en-in',{style:'currency', currency:'INR'})} placeholder='₹120' type='number' name='price'/>
                    </div>
                </div>
                <button type='submit' className=' max-w-[120px] p-[10px] bg-orange-700 text-white rounded-lg shadow-2xl mt-4'>ADD ITEM</button>
            </form>
        </div>
    )
}

export default Add