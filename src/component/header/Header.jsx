import React, { useEffect, useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSticked, setIsSticked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticked(true);
            }
            else {
                setIsSticked(false);
            }
        }

        window.addEventListener('scroll', handleScroll)
    });

    const [clicked, setClicked] = useState(false);

    const handleChange = () => {
        setClicked(!clicked);
    }

    const closeNav = () => {
        let b = document.querySelector('.navbar')
        b.classList.remove('active');
    };

    return (
        <>
            <section id="topbar" className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><Link to="mailto:help@learnwithfraternity.com">help@assignmenthelpperth.com</Link></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+61 4888 96 118</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <Link to="/" className="twitter"><i className="bi bi-twitter"></i></Link>
                        <Link to="/" className="facebook"><i className="bi bi-facebook"></i></Link>
                        <Link to="/" className="instagram"><i className="bi bi-instagram"></i></Link>
                        <Link to="/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>
            </section >

            <header id="header" className={`${isSticked ? "header sticked" : "header"} d-flex align-items-center`}>
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <h1>Assignment<span>.</span></h1>
                    </Link>
                    <nav id="navbar" className={clicked ? "navbar active" : "navbar"}>
                        <ul>
                            <li><a className='active' href="#" onClick={closeNav}>Home</a></li>
                            <li><a href="#services" onClick={closeNav}>Services</a></li>
                            <li><a href="#review" onClick={closeNav}>Reviews</a></li>
                            <li><a href="#faq" onClick={closeNav}>FAQs</a></li>
                            <li><a href="#contact" onClick={closeNav}>Contact us</a></li>
                        </ul>
                    </nav>
                    <div id="mobile" onClick={handleChange}>
                        <i id='bar' className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
