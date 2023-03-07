import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroAbout from '../../HeroAbout/HeroAbout';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import SellBoat from '../SeeBoat/SellBoat';

const Home = () => {
    const data= useLoaderData()
    return (
        <div>
            <Hero></Hero> 
            <Categories></Categories>
            <HeroAbout></HeroAbout>
            <SellBoat></SellBoat>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;