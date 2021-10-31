import React from 'react';
import ContactBar from '../ContactBar/ContactBar';
import Portfolio from '../Portfolio/Portfolio';
import Focus from './Focus';
import Hero from './Hero';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Hero />
            <Focus />
            <Service />
            <ContactBar />
            <Portfolio />
        </div>
    );
};

export default Home;