import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import NoPage from './components/noPage/noPage';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

const App = () => {

  const [ showLogin, setShowLogin ] = useState(false)

  return (
    <>
    { showLogin? <LoginPopup setShowLogin={setShowLogin}/> :<></> }
      <Navbar setShowLogin={setShowLogin}/>
      <div className=' m-auto' style={{width:"80%"}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/*' element={<NoPage />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App