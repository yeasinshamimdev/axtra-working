import Link from 'next/link';
import React from 'react';

const ServiceSixCtaArea = () => {
    return (
        <section class="cta__area cta__area-7 pt-130">
          <div class="container pb-110">
            <div class="row">
              <div class="col-xxl-12">
                <div class="cta__content">
                  <p class="cta__sub-title">Work with us</p>
                  <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                  <div id="btn_wrapper">
                    <Link href="/contact" class="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk us <i
                        class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default ServiceSixCtaArea;