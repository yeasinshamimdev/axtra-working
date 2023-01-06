import Link from "next/link";

export default function HomePortfolioArea4() {
    return (
        <div className="portfolio__page">
            <div className="swiper portfolio__main-slider">
                <div className="swiper-wrapper portfolio__main-wrapper">
                    <div className="swiper-slide">
                        <section className="portfolio__hero-area portfolio-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="portfolio__hero">
                                            <h1 className="title shape-circle">Full stack</h1>
                                            <h2 className="title text-stroke">Web & Mobile</h2>
                                            <h2 className="title">developer</h2>
                                            <div className="btn-wrapper">
                                                <Link href="/portfolio" className="wc-btn-dark">View all work</Link>
                                            </div>
                                            <img src="assets/imgs/portfolio/1.png" alt="Personal Portfolio" className="pp-thumb" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="swiper-slide">
                        <section className="portfolio-section portfolio__about pt-140 pb-150">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-8 col-xxl-8 col-lg-8">
                                        <div className="portfolio__about-left">
                                            <h2 className="sec-title">
                                                I craft wonderful <span>digital experiences</span> for brands
                                            </h2>
                                            <img src="assets/imgs/shape/16.png" alt="Shape" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                                        <div className="sec-text">
                                            <p>Based in Washington, DC, I work with experts from the Center for Strategic and
                                                International
                                                Studies (CSIS) to help them communicate their research more effectively on the web.
                                                Together we
                                                make websites, data visualizations, and long-forms that strengthen their networks and
                                                engage new
                                                audiences with thoughtful content and design strategies.</p>
                                            <Link href="/about" className="wc-btn-dark">Explore Me</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-row">
                                    <div className="row">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                                            <div className="brand-title-wrap">
                                                <h3 className="brand-title">worked with global largest brands</h3>
                                            </div>
                                        </div>
                                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                                            <div className="brand-list">
                                                <div className="brand-logo">
                                                    <img src="assets/imgs/brand/1.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand-logo">
                                                    <img src="assets/imgs/brand/2.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand-logo">
                                                    <img src="assets/imgs/brand/3.png" alt="Brand Logo" />
                                                </div>
                                                <div className="brand-logo">
                                                    <img src="assets/imgs/brand/4.png" alt="Brand Logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="swiper-slide">
                        <section className="portfolio-section portfolio__project">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="pp-title-wrap">
                                            <h2 className="pp-title">Selected <br /> Work</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                                        <div className="pp-slider-wrapper">
                                            <div className="swiper portfolio__project-slider">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide pp-slide">
                                                        <div className="pp-slide-img">
                                                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/1.jpg"
                                                                alt="Portfolio Thumbnail" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide pp-slide">
                                                        <div className="pp-slide-img">
                                                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/2.jpg"
                                                                alt="Portfolio Thumbnail" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide pp-slide">
                                                        <div className="pp-slide-img">
                                                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/3.jpg"
                                                                alt="Portfolio Thumbnail" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide pp-slide">
                                                        <div className="pp-slide-img">
                                                            <Link href="/portfolio-details"><img src="assets/imgs/portfolio/1/4.jpg"
                                                                alt="Portfolio Thumbnail" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pp-next swipper-btn">prev</div>
                                            <div className="pp-prev swipper-btn">Next</div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                                        <div className="swiper portfolio__project-thumbs">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="pp-slide-thumb">
                                                        <h3 className="pp-slide-title">Apple book cover</h3>
                                                        <p>March 2021</p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="pp-slide-thumb">
                                                        <h3 className="pp-slide-title">Apple book cover</h3>
                                                        <p>March 2021</p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="pp-slide-thumb">
                                                        <h3 className="pp-slide-title">Apple book cover</h3>
                                                        <p>March 2021</p>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="pp-slide-thumb">
                                                        <h3 className="pp-slide-title">Apple book cover</h3>
                                                        <p>March 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="swiper-slide">
                        <section className="portfolio-section portfolio__service pt-140 pb-140">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                        <h2 className="sec-title"> I MAKE
                                            THE Service
                                            BETTER.</h2>
                                    </div>
                                    <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                                        <div className="sec-text">
                                            <p>Static and dynamic secure code review can prevent a 0day before your product is even
                                                released. We
                                                can integrate with your dev environment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio__service-list">
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="portfolio__service-item">
                                                <Link href="/service-details">
                                                    <h3 className="ps-title">Frontend <br /> Developemnt</h3>
                                                    <ul>
                                                        <li>+ WordPress</li>
                                                        <li>+ Python</li>
                                                        <li>+ PHP & Laravel</li>
                                                    </ul>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="portfolio__service-item">
                                                <Link href="/service-details">
                                                    <h3 className="ps-title">Backend<br /> Developemnt</h3>
                                                    <ul>
                                                        <li>+ WordPress</li>
                                                        <li>+ Python</li>
                                                        <li>+ PHP & Laravel</li>
                                                    </ul>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="portfolio__service-item">
                                                <Link href="/service-details">
                                                    <h3 className="ps-title">Android<br /> Developemnt</h3>
                                                    <ul>
                                                        <li>+ WordPress</li>
                                                        <li>+ Python</li>
                                                        <li>+ PHP & Laravel</li>
                                                    </ul>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="ps-btn">
                                            <Link href="/contact">Call me to get more extra service <strong>call now</strong></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="swiper-slide">
                        <section className="portfolio-section portfolio__footer-area  pt-130">

                            {/* Contact area start  */}
                            <div className="">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="sec-title-wrapper">
                                                <h2 className="pf-title">Let’s get in touch 🤟</h2>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact__text">
                                                <p>Great! We’re excited to hear from you and let’s start
                                                    something special togerter. call us for any inquery.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                                            <div className="pf-contact">
                                                <h3>Don’t be afraid man ! <br />say hello
                                                </h3>
                                                <ul>
                                                    <li><Link href="tel:+(2)578365379">+(2) 578 - 365 - 379</Link></li>
                                                    <li><Link href="mailto:hello@example.com">hello@example.com</Link></li>
                                                </ul>
                                            </div>
                                            <div className="pf-social">
                                                <h3>follow </h3>
                                                <ul>
                                                    <li><Link href="#">Behance</Link></li>
                                                    <li><Link href="#">Dribble</Link></li>
                                                    <li><Link href="#">Meduim</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                                            <div className="contact__form">
                                                <form action="#">
                                                    <div className="row g-3">
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="text" name="name" placeholder="Name *" />
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="email" name="email" placeholder="Email *" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="tel" name="phone" placeholder="Phone" />
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-12">
                                                            <input type="text" name="subject" placeholder="Subject *" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <textarea name="message" placeholder="Messages *"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <div className="pc-btn">
                                                                <button className="wc-btn-dark">Send Me Quotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Contact area end  */}

                            {/* Footer area start  */}
                            <footer className="portfolio__footer">
                                <div className="container">
                                    <div className="pf-btm">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                                <div className="footer__copyright-2">
                                                    <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/"
                                                        target="_blank" rel="noreferrer">Wealcoder</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                                                <div className="footer__nav">
                                                    <ul className="footer-menu menu-anim">
                                                        <li><Link href="/about">about us</Link></li>
                                                        <li><Link href="/contact">contact</Link></li>
                                                        <li><Link href="/career">Career</Link></li>
                                                        <li><Link href="/faq">FAQs</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                            {/* Footer area end */}
                        </section>
                    </div>

                </div>
                <div className="swiper-pagination circle-pagination-2"></div>
            </div>
        </div>
    )
}