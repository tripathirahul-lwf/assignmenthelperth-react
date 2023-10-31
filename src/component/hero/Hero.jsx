import React from 'react'
import './hero.css'
// import heroImg from '../img/hero-img.svg'
import Embedform from '../embedForm/Embedform'

const Hero = () => {
    return (
        <>
            <section id="hero" className="hero">
                <div className="container position-relative">
                    <div className="row gy-5" data-aos="fade-in">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h2>Welcome to <span>Impact</span></h2>
                            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="/about" className="btn-get-started">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
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
                                    <div className="icon"><i className="bi bi-easel"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-gem"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Sed ut perspiciatis</a></h4>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-geo-alt"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Magni Dolores</a></h4>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-command"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Nemo Enim</a></h4>
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
