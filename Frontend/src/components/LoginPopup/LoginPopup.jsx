import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { MyContext } from '../../Context/MyContext';
import axios from 'axios';
// import { toast } from 'react-toastify';

const LoginPopup = ({setShowLogin}) => {

    const { url, setToken } = useContext(MyContext)

    const [currentState, setCurrentState] = useState("Login");
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState==="Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            // toast.success("Logged in successfully");
            setShowLogin(false);
        } else {
            alert(response.data.message);
        }
    }


    return (
        <div className=' mt-[89px] absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid'>
            <form onSubmit={onLogin} className="place-self-center text-[#808080] bg-[#323250e9] flex flex-col gap-[25px] rounded-2xl text-[14px] animate-ping-slow py-[25px] px-[30px]" style={{width:"max(23vw,330px)"}}>
                <div className="flex justify-between items-center text-cyan-600">
                    <h2 className=' text-[28px] font-bold bi-person-fill'>{currentState}</h2>
                    <img src={assets.cross_icon} className='cursor-pointer w-[16px]' onClick={()=>setShowLogin(false)} alt="" />
                </div>
                <div className="flex flex-col gap-5">
                    {currentState==="Login"?"":<input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required className=' outline-none border border-[#090909f4] p-[10px] rounded-md' />}
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your Email' required className=' outline-none border border-[#090909f4] p-[10px] rounded-md' />
                    <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required className=' outline-none border border-[#090909f4] p-[10px] rounded-md' />
                </div>
                <div className="flex items-start gap-2" style={{marginTop:"-15px"}}>
                    <input type="checkbox" className='mt-[6px]' required />
                    <p>By clicking, I agree to the terms of use & Privacy Policy</p>
                </div>
                <button type='submit' className='p-[10px] rounded text-white bg-orange-700 text-[15px] font-bold'>{currentState==='Sign Up'?"Create Account":"Login"}</button>
                {currentState==='Login'?<p>Create a new Account <span className='cursor-pointer text-red-700 font-bold' onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>:<p>Already have an Account? <span className='cursor-pointer text-green-800 font-bold' onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup