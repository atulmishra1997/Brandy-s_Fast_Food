import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MyContext } from '../../Context/MyContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const {url} = useContext(MyContext);
    const navigate = useNavigate();

    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify",{success, orderId});
        if (response.data.success) {
            navigate("/myorders");
        }
        else {
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

    return (
        <div className='mt-[110px] h-[60vh] grid'>
            <div className="w-[100px] h-[100px] place-self-center border-[5px] border-[#323250] border-t-orange-700 rounded-full animate-spin"></div>
        </div>
    )
}

export default Verify