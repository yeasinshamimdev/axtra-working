import Link from "next/link";

export default function HomeServiceArea() {
    return (
        <section class="service__area-3 pb-150">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="sec-title-wrapper pt-130 text-anim">
                            <h2 class="sec-sub-title title-anim">Services</h2>
                            <h3 class="sec-title title-anim">Our marketing <br /> Services</h3>
                            <p>Consumers today rely heavily on digital means to research products.
                                We
                                research a brand of bldend
                                engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                                products before buying.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xx-12">
                        <div class="service__list-3">
                            <div class="service__item-3 service_animation">
                                <h3><Link href="/service-details" class="service__title-3">Search Engine <br />Optimization</Link></h3>
                                <div class="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul class="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div class="service__btn-3">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i class="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/1.jpg)" }}></div>
                            </div>

                            <div class="service__item-3 service_animation">
                                <h3><Link href="/service-details" class="service__title-3 ">Email <br />Marketing</Link></h3>
                                <div class="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul class="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div class="service__btn-3">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i class="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/2.png)" }}></div>
                            </div>

                            <div class="service__item-3 service_animation">
                                <h3 class=""><Link href="/service-details" class="service__title-3">COntent
                                    <br />Marketing</Link></h3>
                                <div class="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul class="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div class="service__btn-3 ">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i class="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/3.png)" }}></div>
                            </div>

                            <div class="service__item-3 service_animation">
                                <h3 class=""><Link href="/service-details" class="service__title-3">Social
                                    <br />Marketing</Link></h3>
                                <div class="service__content-3">
                                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                    </p>
                                    <ul class="">
                                        <li>+ Logo Design</li>
                                        <li>+ Advertisement</li>
                                        <li>+ Promotion</li>
                                    </ul>
                                </div>
                                <div class="service__btn-3">
                                    <div id="btn_wrapper">
                                        <Link href="/service-details" class="wc-btn-black btn-hover btn-item"><span></span> Details
                                            <i class="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div class="service__hover-3" style={{ backgroundImage: "url(assets/imgs/service/3/4.png)" }}></div>
                            </div>

                            <div class="service3__img-wrap">
                                <div class="service3__img"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}