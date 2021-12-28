// Code starts here 

import React from 'react';
import "./Footer.css";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <section className="Footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h6 class=" text-center mb-3 mt-3">Copyright @ Loreal Ipsom Rights Reserved</h6>

                        <div className='grid-container'>
                            <div class="mb-3 mt-3">
                                <a href="">Home</a>
                            </div>

                            <div class="mb-3 mt-3">
                                <a href="">Faq</a>

                            </div>

                            <div class="mb-3 mt-3">
                                <a href="">About Us</a>
                            </div>

                            <div class="mb-3 mt-3">
                                <a href="">Login</a>
                            </div>

                            <div class="mb-3 mt-3">
                                <a href="">Register</a>

                            </div>

                            <div class="mb-3 mt-3">
                                <a href="">Services</a>
                            </div>
                        </div>

                        <div class="text-center mb-3 mt-3">
                            <SocialIcon url="https://twitter.com/" />
                            <SocialIcon url="https://facebook.com/" />
                            <SocialIcon url="https://instagram.com/" />
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer;