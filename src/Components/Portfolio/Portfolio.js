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
        <section>
            <div className="container py-5">
                <div className="text-center">
                    <Fade top>
                        <h2 className="themeTitle">OUR PORTFOLIO</h2>
                    </Fade>
                    <Flash>
                        <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
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