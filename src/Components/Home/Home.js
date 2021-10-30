import React from 'react';
import Hero from './Hero';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <div>
            <Hero />
            <HomeCard />
            <HomeCard />
            <HomeCard />
        </div>
    );
};

export default Home;