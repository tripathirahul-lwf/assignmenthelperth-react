import React from 'react'
import './hero.css'
import Embedform from '../embedForm/Embedform'
import trust from '../img/trust.png'
import google from '../img/google.png'
import site from '../img/sitejabber.png'
import capterra from '../img/Capterra-grey.png'

const Hero = () => {
    return (
        <>
            <section id="hero" className="hero">
                <div className="container position-relative">
                    <div className="row gy-5" >
                        <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h1>Assignment Help Perth: The Best Way to Unburden the Stress of Assignments!</h1>
                            <p>Are the assignment deadlines disturbing your sleep? Does the nightmare of incomplete assignments haunt you in the middle of the night? Don't worry, we at Assignment Help Perth have your back whether it is the deadline pressure burdening you or the fact that you missed your assignment accidentally!</p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="/" className="btn-get-started">Connect With Expert</a>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="banner_form">
                                <Embedform />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icon-boxes position-relative">
                    <div className="container position-relative">
                        <div className="row gy-4 mt-5">
                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={site} alt="" />
                                    </div>
                                    <div className="rating_main">
                                        <div className="rating_inner">
                                            <div className="rating">5/5</div>
                                            <div className="star">
                                                <div className="rate_star">
                                                    <span><svg width="45" height="45" fill="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M23.25 9.53h-8.608L12 1.5 9.358 9.53H.75l7.041 4.94L5.05 22.5 12 17.524l6.951 4.976-2.747-8.03 7.046-4.94Z">
                                                        </path>
                                                    </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student">500+ users</div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={capterra} alt="" />
                                    </div>
                                    <div className="rating_main">
                                        <div className="rating_inner">
                                            <div className="rating">4.9/5</div>
                                            <div className="star">
                                                <div className="rate_star">
                                                    <span><svg width="45" height="45" fill="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M23.25 9.53h-8.608L12 1.5 9.358 9.53H.75l7.041 4.94L5.05 22.5 12 17.524l6.951 4.976-2.747-8.03 7.046-4.94Z">
                                                        </path>
                                                    </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student">300+ student</div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={google} alt="" />
                                    </div>
                                    <div className="rating_main">
                                        <div className="rating_inner">
                                            <div className="rating">4.95/5</div>
                                            <div className="star">
                                                <div className="rate_star">
                                                    <span><svg width="45" height="45" fill="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M23.25 9.53h-8.608L12 1.5 9.358 9.53H.75l7.041 4.94L5.05 22.5 12 17.524l6.951 4.976-2.747-8.03 7.046-4.94Z">
                                                        </path>
                                                    </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student">5k+ reviews</div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={trust} alt="" />
                                    </div>
                                    <div className="rating_main">
                                        <div className="rating_inner">
                                            <div className="rating">4.9/5 </div>
                                            <div className="star">
                                                <div className="rate_star">
                                                    <span><svg width="45" height="45" fill="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M23.25 9.53h-8.608L12 1.5 9.358 9.53H.75l7.041 4.94L5.05 22.5 12 17.524l6.951 4.976-2.747-8.03 7.046-4.94Z">
                                                        </path>
                                                    </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student">1k+ reviews</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero
