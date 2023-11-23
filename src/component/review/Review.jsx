import React from 'react'
import './review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


const Review = () => {
    return (
        <>

            <section id="review" className="testimonials section-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>Testimonials</h2>
                    </div>

                    <div className="slides-3 swiper">
                        <div className="swiper-wrapper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}

                                loop={true} pagination={{
                                    "clickable": true
                                }}
                                breakpoints={{
                                    // when window width is >= 640px
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    640: {

                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {

                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    }
                                }}
                            >
                                <SwiperSlide><div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">

                                            <p>
                                                <i className="fa-solid fa-quote-left"></i>
                                                I was overburdened with multiple assignments which seemed to be next to impossible before the deadline. Without wasting time any further, I approached Assignment Help Perth, recommended by a friend, and believe me my assignments were completed without any errors before the deadline. What a help indeed!!!
                                               <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <p>
                                                <i className="fa-solid fa-quote-left"></i>
                                                I had an engineering dynamics assignment and the questions went straight above my head. Perplexed, I looked for immediate help on Google and found this assignment help in Hobart. Within 3 hours of contacting them, they handed me over the assignment that too with no errors. I will recommend this help.
                                               <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <p>
                                                <i className="fa-solid fa-quote-left"></i>
                                                The chemical equations in the chemistry assignment were irking me a lot. Even after too many efforts I failed to understand the concept so I decided to look for the best assignment help in Perth and came across this website; wow what an assistance they provided. Will love to seek assistance from them in the future!
                                               <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <p>
                                                <i className="fa-solid fa-quote-left"></i>
                                                Assignment Help Perth completed my Java assignment and I was even praised by my professor for the remarkable work. This elevated my respect for the online assignment help Hobart they helped me with!
                                               <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <p>
                                                <i className="fa-solid fa-quote-left"></i>
                                                My business analytics assignment required lots of charts and tables which required going through a lot of data. The best assignment help Perth excels here too. They not only helped me complete my assignment but even explained it to me. Good job Assignment help Perth!
                                               <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">

                                            <p>
                                                <i className="fa-solid fa-quote-left"></i>
                                                My Essay assignment required a lot of brainstorming as it had to be the best for my good grades in English Literature. After looking for the assignment help in Perth I finally ended up with them. To my surprise, the essay had zero flaws which surpassed my expectations. A big sigh of relief and huge thanks to Assignment Help Perth!
                                               <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div></SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review
