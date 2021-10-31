import React from 'react';
import Banner from '../Shared/Banner/Banner';
import banner from '../../images/banner.jpg';

const MobileApp = () => {
    return (
        <div>
            <Banner
                bannerImg={banner}
                bannerTitle="Mobile App"
            />
        </div>
    );
};

export default MobileApp;