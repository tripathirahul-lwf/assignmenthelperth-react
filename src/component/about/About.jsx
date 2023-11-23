import React from 'react'
import './about.css';
import customer from '../img/customer-service.png'
import content from '../img/content.png'
import experience from '../img/experience.png'
import delivery from '../img/delivery-van.png'
import payment from '../img/payment-method.png'
import deal from '../img/commerce.png'
import assistant from '../img/partner.png'
import available from '../img/24-7.png'


const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="row display-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header">
                                <h2>Why Are We Considered The Best Assignment Perth?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row display-flex justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                                <div className="about_img">
                                    <img src={customer} alt="Dedicated customer service icon" loading='lazy'/>
                                </div>
                                <h3>Dedicated customer service</h3>
                                <p>Being one of the top providers of assignment help in Perth we have a keen focus on assignment delivery. Last year we singlehandedly delivered 1000+ assignments in a month which is still a record!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                            <div className="about_img">
                                    <img src={content} alt="100% genuine content icon" loading='lazy'/>
                                </div>
                                <h3>100% genuine content</h3>
                                <p>Being one of the Best Assignment Help Perth, we boast at delivering 100 percent genuine content and that too with a fresh perspective. Our content is AI and Chat GPT free. Along with this, we adhere to a strict no-plagiarism policy and ensure that all our content has the A+ quality.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                            <div className="about_img">
                                    <img src={experience} alt="A decade of experience icon" loading='lazy'/>
                                </div>
                                <h3>A decade of experience</h3>
                                <p>For years, our Assignment help firm from Perth has delighted clients with our exceptional dedication and output. Don’t believe us? Have a look at our testimonial section to know more!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                            <div className="about_img">
                                    <img src={delivery} alt="Timely delivery icon" loading='lazy'/>
                                </div>
                                <h3>Timely delivery</h3>
                                <p>You won't ever have to worry about missing deadlines when working with our services for assignment help in Perth. All our assignment writers ensure timely delivery no matter when you place the order for an assignment.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                            <div className="about_img">
                                    <img src={payment} alt="Transparency with payment icon" loading='lazy'/>
                                </div>
                                <h3>Transparency with payment</h3>
                                <p>Once we receive the order, you only need to pay 50% of the amount; the other 50% will be paid once the assignment is delivered to you by the Hobart Assignment Help website.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                            <div className="about_img">
                                    <img src={deal} alt="Best Deal icon" loading='lazy'/>
                                </div>
                                <h3>Best Deal</h3>
                                <p>Trust us when we say that our services offering assignment help in Perth are highly affordable and full of heavy quality content. We even offer seasonal discounts that can help you buy our assignment help at an even cheaper price.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                            <div className="about_img">
                                    <img src={assistant} alt="Silent Assistance icon" loading='lazy'/>
                                </div>
                                <h3>Silent Assistance</h3>
                                <p>We are not just available in Perth but can assist you with online assignment help Hobart wherever and whenever required. That is not it, we have our wings spread across the entire nation of Australia. So, all you need to do is pick up your phone and dial to us right away!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-about">
                            <div className="about_img">
                                    <img src={available} alt="24/7 availability icon" loading='lazy'/>
                                </div>
                                <h3>24/7 availability</h3>
                                <p>Understanding that an emergency can arise at any time, we ensure to keep our assignment help in Hobart and Perth available 24/7. So, whenever you pick up a bone with your assignment tasks or want us to work on the deadline, we are here for you!</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default About
