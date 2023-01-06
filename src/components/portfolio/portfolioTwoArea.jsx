import Link from 'next/link';
import React from 'react';
import { portfolioTwoContent } from '../constants/constants';
import PortfolioHero from './portfolioHero'; 

const PortfolioTwoArea = () => {

  const heroContent = {
    titleOne: "Selected",
    titleTwo: "Projects",
    desc: "Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
  }

  return (
    <>
      <PortfolioHero titleOne={heroContent.titleOne} titleTwo={heroContent.titleTwo} desc={heroContent.desc} />
      <section class="portfolio__area pb-140">
        <div class="container">
          <div class="row top_row">

            <h2 class="portfolio__text">work</h2>
            <div class="portfolio__list-1">
              {
                portfolioTwoContent.map((pTwo, i) =>
                  <div class="portfolio__item" key={i}>
                    <Link href="/portfolio-details"><img class="mover" src={pTwo.imageUrl}
                      alt="Portfolio Image" /></Link>
                    <div class="portfolio__info">
                      <h3 class="portfolio__title">{pTwo.title}</h3>
                      <p>{pTwo.data}</p>
                    </div>
                  </div>
                )
              } 
            </div>
          </div>

          <div class="row row_bottom">
            <div class="col-xxl-12">
              <div class="portfolio__btn" id="btn_wrapper" data-speed="1" data-lag="0.2">
                <Link class="wc-btn-secondary btn-hover btn-item" href="/portfolio"><span></span>Load More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioTwoArea;