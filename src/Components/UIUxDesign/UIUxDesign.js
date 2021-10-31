import React from 'react';
import Banner from '../Shared/Banner/Banner';
import banner from '../../images/banner.jpg';

const UIUxDesign = () => {
    return (
        <div>
            <Banner
                bannerImg={banner}
                bannerTitle="UI UX Design"
            />
        </div>
    );
};

export default UIUxDesign;