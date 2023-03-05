import React from 'react';
import HeroAbout from '../../HeroAbout/HeroAbout';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero> 
            <Categories></Categories>
            <HeroAbout></HeroAbout>
        </div>
    );
};

export default Home;