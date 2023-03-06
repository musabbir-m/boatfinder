import React from 'react';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import 'swiper/css';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar> 
          <Outlet></Outlet>
        </div>  
    );
};

export default Main;