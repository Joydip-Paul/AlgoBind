import React from 'react';
import Banner from '../Shared/Banner/Banner';
import banner from '../../images/banner.jpg';

const WebServices = () => {
    return (
        <div>
            <Banner
                bannerImg={banner}
                bannerTitle="Web Services"
            />
        </div>
    );
};

export default WebServices;