import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <>
            <section id="contact" class="contact section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="info-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div class="info-item d-flex">
                                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Location:</h4>
                                        <p>Endeavour Hills Victoria, Australia PO Box: 3802, Australia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="info-item d-flex">
                                    <i class="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p><a href="mailto:help@learnwithfraternity.com">help@assignmenthelpperth.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="info-item d-flex">
                                    <i class="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p><a href="tel:61488896118">+61 4888 96 118</a> </p>
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
