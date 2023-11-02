import React, { useEffect, useState } from 'react';
import './header.css'

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
    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.addEventListener('click', function (event) {
            event.preventDefault();
            mobileNavToogle();
        })
    });
    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
    }
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        navbarlink.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });
    });


    return (
        <>
            <section id="topbar" className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <a href="/" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="/" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="/" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </section >

           
            <header id="header" className={`${isSticked ? "header sticked" : "header"} d-flex align-items-center`}>
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1>Assignment<span>.</span></h1>
                    </a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="/hero">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/portfolio">Reviews</a></li>
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="contact">Contact us</a></li>
                        </ul>
                    </nav>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide bi bi-x"></i>

                </div>
            </header>

        </>
    )
}

export default Header
