import Link from "next/link";

export default function HomeServiceArea1() {
    return (
        <section className="service__area pt-110 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div className="sec-title-wrapper wrap">
                            <h2 className="sec-sub-title title-anim">service</h2>
                            <h3 className="sec-title title-anim">Solution we <br />provide</h3>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <div className="service__top-text text-anim">
                            <p>With every single one of our clients we bring forth a deep passion
                                for <span>creative problem solving
                                    innovations</span> forward thinking
                                brands boundaries</p>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                        <div className="service__top-btn">
                            <div id="btn_wrapper">
                                <Link href="/service" className="btn-item wc-btn-secondary btn-hover"><span></span> View <br />all
                                    services <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service__list-wrapper">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                            <div className="service__img-wrapper">
                                <img src="assets/imgs/service/1/1.jpg" alt="Service Image" className="service__img img-1 active" />
                                <img src="assets/imgs/service/1/2.png" alt="Service Image" className="service__img img-2" />
                                <img src="assets/imgs/service/1/3.png" alt="Service Image" className="service__img img-3" />
                                <img src="assets/imgs/service/1/4.png" alt="Service Image" className="service__img img-4" />

                                <span className="shape-box-1 current"></span>
                                <span className="shape-box-2"></span>
                                <span className="shape-box-3"></span>
                                <span className="shape-box-4"></span>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                            <div className="service__list">
                                <Link href="/service-details">
                                    <div className="service__item animation_home1_service" data-service="1">
                                        <div className="service__number"><span>01</span></div>
                                        <div className="service__title-wrapper">
                                            <h4 className="service__title">Web & Mobile
                                                Development</h4>
                                        </div>
                                        <div className="service__text">
                                            <p>We create, products, brands, apps & websites for the companies all around the world class
                                                digital
                                                products</p>
                                        </div>
                                        <div className="service__link">
                                            <p><i className="fa-solid fa-arrow-right"></i></p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/service-details">
                                    <div className="service__item  animation_home1_service" data-service="2">
                                        <div className="service__number"><span>02</span></div>
                                        <div className="service__title-wrapper">
                                            <h4 className="service__title">Interaction <br />Design</h4>
                                        </div>
                                        <div className="service__text">
                                            <p>We create, products, brands, apps & websites for the companies all around the world class
                                                digital
                                                products</p>
                                        </div>
                                        <div className="service__link">
                                            <p><i className="fa-solid fa-arrow-right"></i></p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/service-details">
                                    <div className="service__item  animation_home1_service" data-service="3">
                                        <div className="service__number"><span>03</span></div>
                                        <div className="service__title-wrapper">
                                            <h4 className="service__title">Digital <br />Maketing</h4>
                                        </div>
                                        <div className="service__text">
                                            <p>We create, products, brands, apps & websites for the companies all around the world class
                                                digital
                                                products</p>
                                        </div>
                                        <div className="service__link">
                                            <p><i className="fa-solid fa-arrow-right"></i></p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/service-details">
                                    <div className="service__item  animation_home1_service" data-service="4">
                                        <div className="service__number"><span>04</span></div>
                                        <div className="service__title-wrapper">
                                            <h4 className="service__title">Branding and Strategy</h4>
                                        </div>
                                        <div className="service__text">
                                            <p>We create, products, brands, apps & websites for the companies all around the world class
                                                digital
                                                products</p>
                                        </div>
                                        <div className="service__link">
                                            <p><i className="fa-solid fa-arrow-right"></i></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}