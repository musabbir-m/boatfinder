import React from 'react';
import HeroAbout from '../../HeroAbout/HeroAbout';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import SellBoat from '../SeeBoat/SellBoat';

const Home = () => {
    return (
        <div>
            <Hero></Hero> 
            <Categories></Categories>
            <HeroAbout></HeroAbout>
            <SellBoat></SellBoat>
        </div>
    );
};

export default Home;