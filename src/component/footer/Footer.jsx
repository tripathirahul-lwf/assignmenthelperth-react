import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer id="footer" class="footer">

                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-5 col-md-12 order-2 order-lg-0 footer-info">
                            <Link to="/" class="logo d-flex align-items-center">
                                <img src={logo} alt="assignmenthelpperth logo" loading='lazy' />
                            </Link>
                            <p>Get exceptional academic success with Assignment Help Perth today! Our knowledgeable staff aims at making your experience of acquiring education exceptional. Trust us with accurate assignments and prompt delivery. Your success is our priority. Reach us today and see how you can become better in your academics.</p>
                            <div class="social-links d-flex mt-4">
                                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div class="col-lg-4 col-md-12 order-1 order-lg-2 footer-contact">
                            <h5>Subjects</h5>
                            <ul className='footer_subject'>
                                <li>Nursing</li>
                                <li>Marketing</li>
                                <li>Management</li>
                                <li>Finance</li>
                                <li>Law</li>
                                <li>Science</li>
                                <li>Programming</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="container mt-4">
                    <div class="copyright">
                        &copy; Copyright 2010 - {currentYear} <strong><span>assignmenthelpperth.com</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer >
            <div className="container-fluid bg">
                <div className="container">
                    <div className="disc">
                        <p><strong>Disclaimer : </strong>All academic content provided by assignmenthelpperth.au, including assignments, essays, papers, and presentations, is intended for reference only. We strictly disapprove of plagiarism and expect users to use these resources for their own writing purposes.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
