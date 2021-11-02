import React from 'react';
import Academy from '../Academy/Academy';
import Contact from '../Contact/Contact';
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
            <Contact />
            <Academy />
            <Portfolio />
        </div>
    );
};

export default Home;