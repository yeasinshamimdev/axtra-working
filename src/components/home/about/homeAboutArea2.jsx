import Link from "next/link";

export default function HomeAboutArea2() {
    return (
        <section className="about__area-2">
            <div className="container pt-130 pb-110">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="sec-title-wrapper">
                            <h2 className="sec-title title-anim">We design and develop
                                outstanding Digital <br /> Products
                                and digital-first Brands.</h2>
                        </div>
                        <div className="sec-text-wrapper">
                            <div className="sec-text text-anim">
                                <p>We help brands stand out through powerful, elegant visual design. Our design philosophy is shaped
                                    by our experience growing up at our father’s bookbindery. Surrounded by the highest-quality
                                    materials and turn-of-the-century machines, we observed the art of true craftsmanship firsthand.
                                </p>
                            </div>
                            <div id="btn_wrapper" className="sec-btn">
                                <Link className="wc-btn-pink btn-hover btn-item" href="/about"><span></span> Explore Us <i
                                    className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__img-2 pb-130">
                <img src="assets/imgs/about/2/1.jpg" alt="About Image" data-speed="0.2" />
            </div>

            <div className="container pb-140">
                <div className="row">
                    <div className="col-xxl-12">
                        <h2 className="brand__title-2 title-anim">We worked with global largest brands
                        </h2>
                        <div className="brand__list-2">
                            <div className="brand__item-2 fade_bottom">
                                <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                            </div>
                            <div className="brand__item-2 fade_bottom">
                                <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                            </div>
                            <div className="brand__item-2 fade_bottom">
                                <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                            </div>
                            <div className="brand__item-2 fade_bottom">
                                <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                            </div>
                            <div className="brand__item-2 fade_bottom">
                                <img src="assets/imgs/brand/5.png" alt="Brand Logo" />
                            </div>
                            <div className="brand__item-2 fade_bottom">
                                <img src="assets/imgs/brand/6.png" alt="Brand Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}