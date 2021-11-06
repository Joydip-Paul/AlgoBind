import { Tab } from 'bootstrap';
import React from 'react';
import { Tabs } from 'react-bootstrap';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Mobile from './Mobile';
import './Portfolio.css';
import Web from './Web';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

const Portfolio = () => {
    return (
        <section id="mobile">
            <div className="container py-5">
                <div className="text-center">
                    <Fade top>
                        <h2 className="themeTitle pt-5">PORTFOLIO</h2>
                    </Fade>
                    <Flash>
                        <p>The tech industry is one of the leading sectors that is growing at the fastest pace. As per statistics, apps are expected to generate $189 Billion US dollars in revenue by 2021. Here few of our works.</p>
                    </Flash>
                </div>

                <div className="mt-5">
                    <Tabs defaultActiveKey="mobile" id="uncontrolled-tab-example" className="justify-content-center tab-nav">
                        <Tab eventKey="mobile" title="Mobile">
                            <Mobile />
                        </Tab>
                        <Tab eventKey="web" title="Web">
                            <Web />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;