import React from 'react';
import './ContactBar.css';

const ContactBar = () => {
    return (
        <section className = "themeBg">
            <div className="container">
                <div className="row subFooter">
                    <div className = "col-md-8">
                        <h3 className="my-auto themeTitle mb-2">Call To Action</h3>
                        <p className = "w-7">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="my-auto col-md-4">
                        {/* <a href="">contact us</a> */}
                        <button className = "">contact us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBar;