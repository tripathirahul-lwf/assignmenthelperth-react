import React from 'react'
import './feature.css'
import direction from '../img/feature/feedback.png'
import imitation from '../img/feature/role-model.png'
import investigation from '../img/feature/private-detective.png'
import clearification from '../img/feature/clarification.png'
import plagiarism from '../img/feature/documents.png'
import revision from '../img/feature/revision.png'

const Feature = () => {
    return (
        <>
            <section  className="services sections-bg">
                <div className="container">
                    <div className="row display-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-header">
                                <h2>How Does Assignment Help Perth Online Ace Every Delivery?</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item  position-relative">
                                <div className="icon">
                                    <img src={direction} alt="Thorough directions review icon" loading='lazy'/>
                                </div>
                                <h3>Thorough directions review</h3>
                                <p>Your instructions will be carefully read by our online assignment help Perth writers to ensure that what we write is what you want! If you have any additional information and want to discuss about it with our assignment expert Perth then, all you need to do is dial us right away!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                <img src={imitation} alt="Accurate imitation of style icon" loading='lazy'/>
                                </div>
                                <h3>Accurate imitation of style</h3>
                                <p>The writer assigned to handle your tasks will ensure to provide you with personalised assistance by imitating your writing style, nobody will be able to tell that you used our online assignment help in Perth.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                <img src={investigation} alt="Comprehensive investigation icon" loading='lazy'/>
                                </div>
                                <h3>Comprehensive investigation</h3>
                                <p>At this stage, our assignment help Perth`s expert carry out a comprehensive investigation by examining scholarly publications and academic sources.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                <img src={clearification} alt="Client clarifications icon" loading='lazy'/>
                                </div>
                                <h3>Client clarifications</h3>
                                <p>Your assignment expert will reach out to you with clarifications and ask you any relevant questions to produce the best possible result. Assignment Help Perth gives you a chance to request updates and drafts directly from your writer, so feel free to seek out for queries if you have.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                <img src={plagiarism} alt="Plagiarism check icon" loading='lazy'/>
                                </div>
                                <h3>Plagiarism check</h3>
                                <p>At this stage, assignment help services in Perth make the final touches and complete the writing. After a thorough round of proofreading and checking your assignment for AI, we then take it forward to check plagiarism. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item position-relative">
                                <div className="icon">
                                <img src={revision} alt="Final revisions icon" loading='lazy'/>
                                </div>
                                <h3>Final revisions</h3>
                                <p>Once you receive the final draft, if there is anything a student’s wants us to rectify, Perth Assignment Help allows them to seek free assistance of experts until they feel it is ready for submission</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Feature
