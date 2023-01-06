import React from 'react';

const PortfolioHero = ({titleOne, titleTwo, desc}) => {
    return (
        <section class="pt-150 pb-130 portfolio-v2">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                        <div class="sec-title-wrapper">
                            <h2 class="sec-title-2 animation__char_come">{titleOne} <br /> {titleTwo}</h2>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                        <div class="blog__text">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;