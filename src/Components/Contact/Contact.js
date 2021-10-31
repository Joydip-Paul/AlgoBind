import React from 'react';
import Banner from '../Shared/Banner/Banner';
import banner from '../../images/banner.jpg';

const Contact = () => {
    return (
        <div>
            <Banner
                bannerImg={banner}
                bannerTitle="Contact"
            />
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;