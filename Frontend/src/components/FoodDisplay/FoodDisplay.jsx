import React, { useContext } from 'react'
import { MyContext } from '../../Context/MyContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(MyContext)
    return (
        <div className=' mt=[30px]' id='food-display'>
            <h1 className=' mt-3 text-3xl font-bold text-orange-800'>Your Favourite Dishes Near You</h1>
            <div className=' mt-[30px] gap-[30px]' style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", rowGap:"50px"}}>
                {food_list.map((item, index) =>{
                    if (category === "All" || category ===item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    }
                    
                })}
            </div>
            
        </div>
    )
}

export default FoodDisplay