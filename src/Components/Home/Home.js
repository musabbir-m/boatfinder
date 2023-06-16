import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroAbout from '../../HeroAbout/HeroAbout';
import Advertisement from '../Advertisement/Advertisement';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import SellBoat from '../SeeBoat/SellBoat';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    const data= useLoaderData()
    return (
        <div className=''>
            <Hero></Hero> 
            <Categories></Categories>
            <HeroAbout></HeroAbout>
            <SellBoat></SellBoat>
            <Testimonials></Testimonials>
            <Advertisement></Advertisement>
            
           
        </div>
    );
};

export default Home;