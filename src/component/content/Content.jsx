import React from 'react'
import './content.css'

const Content = () => {
    return (
        <div>

            <section id="why" className=" pt-100 pb-100">
                <div className="feature-extended-wrapper">
                    <div className="container">
                        <div className="section-header">
                            <h2>Content</h2>
                            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                        </div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="p-5 bg-white rounded shadow mb-5">
                                    <div className="about-five-tab">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button className="nav-link active" id="nav-who-tab" data-bs-toggle="tab" data-bs-target="#nav-who"
                                                    type="button" role="tab" aria-controls="nav-who" aria-selected="true">Who We Are</button>
                                                <button className="nav-link" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision"
                                                    type="button" role="tab" aria-controls="nav-vision" aria-selected="false">our Vision</button>
                                                <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history"
                                                    type="button" role="tab" aria-controls="nav-history" aria-selected="false">our History</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-who" role="tabpanel" aria-labelledby="nav-who-tab">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                                    when
                                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                    distribution of letters, look like readable English.</p>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                                    form,
                                                    by injected humour.</p>
                                            </div>
                                            <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                                    when
                                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                    distribution of letters, look like readable English.</p>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                                    form,
                                                    by injected humour.</p>
                                            </div>
                                            <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                                    when
                                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                    distribution of letters, look like readable English.</p>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                                    form,
                                                    by injected humour.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}



export default Content
