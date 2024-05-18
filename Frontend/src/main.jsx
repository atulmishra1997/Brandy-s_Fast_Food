import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import MyContextProvider from './Context/MyContext.jsx';
import { } from '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <MyContextProvider>
        <App/>
      </MyContextProvider>
    </BrowserRouter>
  
)
