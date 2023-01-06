import React from 'react';

const ServiceDetailsArea = () => {
    return (
        <section className="service__detail">
            <div className="container g-0 line pb-140">
                <div className="line-3"></div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title title-anim">We replace unreliable wirefreme and expensive agencies for one of the
                                best
                                organized layer.</h2>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                        <div className="service__detail-circle">
                            <span></span>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
                        <div className="service__detail-img">
                            <img src="assets/imgs/thumb/service-detail.png" alt="Service detail image" />
                            <img src="assets/imgs/icon/shape-6.png" alt="Service shape image" className="sd-shape" />
                        </div>
                        <div className="service__detail-content">
                            <p>Receive your design within a few business days, and be updated on the process. Everything you
                                need
                                for a digitally driven brand. Defined proposition. Conceptual realisation. Logo, type, look, feel,
                                tone, movement, content - we have got it covered.</p>
                            <p>Getting your brand message out there. We create dynamic campaign creative that engages audiences,
                                wherever they are most talented. Bring your brand to life, communicate your value proposition with
                                agile setup across creativity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsArea;