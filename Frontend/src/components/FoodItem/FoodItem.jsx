import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { MyContext } from '../../Context/MyContext'

const FoodItem = ({id, name, price, description, image}) => {

    // const [itemCount, setItemCount] = useState(0)
    const {cartItems, addToCart, removeFromCart,url} = useContext(MyContext);

    return (
        <div className='w-[100%] m-auto rounded-2xl p-3 animate-[bounce_2s_linear] cursor-pointer hover:scale-110' style={{boxShadow:"2px 2px 10px #000000", transition:"0.5s"}}>
            <div className=" relative">
                <img src={url+"/images/"+image} alt="" className="w-[100%] rounded-t-2xl" />
                {!cartItems[id]
                ?<img className='w-[35px] absolute bottom-[15px] right-[15px] rounded-full' title='Add To Cart' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] bg-[white] rounded-full'><img src={assets.remove_icon_red} className='w-[23px]' onClick={()=>removeFromCart(id)} alt="" /><p>{cartItems[id]}</p><img onClick={()=>addToCart(id)} className='w-[23px]' src={assets.add_icon_green} alt="" /></div>}
            </div>
            <div className="p-[10px]">
                <div className=" flex justify-between items-center mb-[10px]">
                    <p className=' font-bold text-base'>{name}</p>
                    <img src={assets.rating_starts} alt="" className='w-[70px]' />
                </div>
                <p className=' text-xs text-[#676767]'>{description}</p>
                <p className=' text-[22px] text-yellow-800 font-bold my-[10px]'>&#8377;{price}</p>
            </div>
        </div>
    )
}

export default FoodItem