import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer id="footer" class="footer">

                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-5 col-md-12 footer-info">
                            <Link to="/" class="logo d-flex align-items-center">
                                <span>Impact</span>
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
                        <div class="col-lg-4 col-md-12 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                            Endeavour Hills Victoria <br />
                            Australia PO Box: 3802<br />
                            Australia <br /><br />
                                <strong>Phone:</strong><a className='footer-c' href="/tel:61488896118">+61 4888 96 118</a> <br />
                                <strong>Email:</strong> <a className='footer-c' href="mailto:help@learnwithfraternity.com">help@assignmenthelpperth.com</a><br />
                            </p>
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
