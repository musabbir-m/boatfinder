import React from 'react';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import 'swiper/css';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='mx-auto max-w-full'>
           <Navbar></Navbar> 
          <Outlet></Outlet>
          <Footer></Footer>
        </div>  
    );
};

export default Main;