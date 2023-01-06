import React from 'react';

const ServiceOneHero = () => {
    return (
        <section className="solution__area">
                <div className="container hero-line"></div>
                <div className="solution__wrapper">
                    <div className="solution__left">
                        <div className="solution__img-1">
                            <img src="assets/imgs/thumb/solution.png" alt="Solution Image" />
                        </div>
                        <div className="solution__img-2">
                            <img src="assets/imgs/thumb/solution-2.png" alt="Solution Image" />
                        </div>
                    </div>

                    <div className="solution__mid">
                        <h1 className="solution__title animation__char_come">Digital Solution</h1>
                        <p>We’re designing digital experiences that enrich human lives and it helps to grow your business
                            globally trends.</p>
                    </div>

                    <div className="solution__right">
                        <div className="solution__img-3">
                            <img src="assets/imgs/thumb/solution-3.png" alt="Solution Image" />
                        </div>
                    </div>
                </div>

                <div className="container pb-130">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="solution__btm">
                                <ul>
                                    <li>Approch</li>
                                    <li>Creativity</li>
                                    <li>Experienced</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="solution__shape">
                    <img src="assets/imgs/icon/1.png" alt="Shape Image" className="shape-1" />
                    <img src="assets/imgs/icon/2.png" alt="Shape Image" className="shape-2" />
                    <img src="assets/imgs/icon/3.png" alt="Shape Image" className="shape-3" />
                    <img src="assets/imgs/icon/4.png" alt="Shape Image" className="shape-4" />
                    <img src="assets/imgs/icon/5.png" alt="Shape Image" className="shape-5" />
                </div>
            </section>
    );
};

export default ServiceOneHero;