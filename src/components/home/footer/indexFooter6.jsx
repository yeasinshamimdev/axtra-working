import Link from "next/link";

export default function IndexFooter6() {
    return (
        <footer className="footer__area-6">
            <div className="container g-0 line_4">
                <div className="line-col-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="footer__top-6 pt-150 pb-140">
                            <div className="footer__item-6">
                                <img className="footer__logo logo-light" src="assets/imgs/logo/site-logo-white-2.png" alt="Footer Logo" />
                                <img className="footer__logo logo-dark" src="assets/imgs/logo/logo-black.png" alt="Footer Logo" />
                                <p>When do they work well, and when do they <br /> on us and finally, when do we actually need how can
                                    we avoid them.</p>
                                <ul className="footer__social-6">
                                    <li><Link href="#"><span><i className="fa-brands fa-facebook-f"></i></span></Link></li>
                                    <li><Link href="#"><span><i className="fa-brands fa-twitter"></i></span></Link></li>
                                    <li><Link href="#"><span><i className="fa-brands fa-instagram"></i></span></Link></li>
                                    <li><Link href="#"><span><i className="fa-brands fa-linkedin"></i></span></Link></li>
                                </ul>
                            </div>

                            <div className="footer__item-6">
                                <h2 className="footer__item-title">Information</h2>
                                <ul className="footer__link-6">
                                    <li><Link href="/about">About Company</Link></li>
                                    <li><Link href="/career">Career</Link></li>
                                    <li><Link href="/portfolio">Case Study</Link></li>
                                    <li><Link href="#">Unloack System</Link></li>
                                    <li><Link href="#">Blueprint</Link></li>
                                </ul>
                            </div>

                            <div className="footer__item-6">
                                <h2 className="footer__item-title">Contact Us</h2>
                                <ul className="footer__info-6">
                                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                                    <li><Link href="tel:02574328301" className="phone">+02) 574 - 328 - 301 </Link></li>
                                    <li><Link href="mailto:info@buildyexample.com">info@buildyexample.com</Link></li>
                                </ul>
                            </div>
                            <div className="footer__item-6">
                                <h2 className="footer__item-title">newsletter</h2>
                                <form action="#">
                                    <div className="footer__newsletter-6">
                                        <input type="email" name="email" required placeholder="Enter your email" />
                                        <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                    <div className="footer__chekbox">
                                        <input type="checkbox" id="check_box" name="checkbox" />
                                        <label>I’m okay with getting emails and having that activity and privacy policy.</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="footer__btm-6">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                                    <div className="footer__copyright-6">
                                        <p>© 2022 - 2025 | Alrights reserved by <br /> <Link href="https://wealcoder.com/"
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
                </div>
            </div>
        </footer>
    )
}