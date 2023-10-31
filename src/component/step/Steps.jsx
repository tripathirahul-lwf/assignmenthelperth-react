import React from 'react'
import './step.css'

const Steps = () => {
    return (
        <>
            <section id="pricing" className="pricing sections-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Steps</h2>
                        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                    </div>

                    <div className="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">

                        <div className="col-lg-4">
                            <div className="pricing-item">
                                <h3>Free Plan</h3>
                                <div className="icon">
                                    <i className="bi bi-box"></i>
                                </div>
                                <h4>01</h4>
                                <p className='mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis iste sed incidunt similique, exercitationem odio, odit quo esse sapiente, recusandae dignissimos corrupti accusamus inventore.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-item featured">
                                <h3>Business Plan</h3>
                                <div className="icon">
                                    <i className="bi bi-airplane"></i>
                                </div>

                                <h4>02 </h4>
                                <p className='mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis iste sed incidunt similique, exercitationem odio, odit quo esse sapiente, recusandae dignissimos corrupti accusamus inventore.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-item">
                                <h3>Developer Plan</h3>
                                <div className="icon">
                                    <i className="bi bi-send"></i>
                                </div>
                                <h4>03</h4>
                                <p className='mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis iste sed incidunt similique, exercitationem odio, odit quo esse sapiente, recusandae dignissimos corrupti accusamus inventore.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Steps
