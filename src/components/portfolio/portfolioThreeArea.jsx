import Link from 'next/link';
import React from 'react';
import { portfolioThreeContent } from '../constants/constants';

const PortfolioThreeArea = () => {
  return (
    <section class="portfolio__area-2 portfolio-v3">
      <div class="container g-0 line pt-100 pb-140">
        <div class="row">
          <div class="col-xxl-12">
            <div class="sec-title-wrapper text-anim">
              <h2 class="sec-title-3 title-anim">Selected <span>Projects</span></h2>
              <p class="sec-text">Worked with global brands & agency at the
                intersection of flat design and digital
                technology.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper portfolio__slider-2">
        <div class="swiper-wrapper">
          {
            portfolioThreeContent.map((pThree, i) => 
              <div class="swiper-slide" key={i}>
                <div class="portfolio__slide-2">
                  <div class="slide-img">
                    <Link href="/portfolio-details"><img src={pThree.imageUrl} alt="Portfolio Image" /></Link>
                  </div>
                  <div class="slide-content text-anim">
                    <h2 class="sec-title title-anim"> <Link href="portfolio-details ">{pThree.titleFirst} <span>{pThree.titleSecond}</span></Link>
                    </h2>
                    <p>We are passionate designers, developers and digital marketeers. We produce best projects that
                      both
                      ourselves</p>
                    <div class="btn-common-wrap">
                      <Link href="portfolio-details " class="btn-common">View details <i
                        class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          } 
        </div>

        <div class="portfolio__slider-2-pagination--">
          <div class="swiper-pagination circle-pagination right"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioThreeArea;