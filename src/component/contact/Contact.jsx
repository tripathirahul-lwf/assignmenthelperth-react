import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <>
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">

                    <div class="info-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div class="info-item d-flex">
                                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i class="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div class="info-item d-flex">
                                    <i class="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div class="info-item d-flex">
                                    <i class="bi bi-clock flex-shrink-0"></i>
                                    <div>
                                        <h4>Open Hours:</h4>
                                        <p>Mon-Sat: 11AM - 23PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
