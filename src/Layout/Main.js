import React from 'react';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import 'swiper/css';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Home></Home>
        </div>  
    );
};

export default Main;