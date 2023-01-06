import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        < footer className="footer__area" >
            <div className="footer__top">
                <div className="container footer-line"></div>
                <img src="assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.5" />
            </div>

            <div className="footer__btm">
                <div className="container">
                    <div className="row footer__row">
                        <div className="col-xxl-12">
                            <div className="footer__inner">
                                <div className="footer__widget">
                                    <img className="footer__logo" src="assets/imgs/logo/footer-logo-white.png" alt="Footer Logo" />
                                    <p>When do they work well, and when do they on us and finally, when do we actually need how can we
                                        avoid
                                        them.</p>
                                    <ul className="footer__social">
                                        <li><Link href="#"><span><i className="fa-brands fa-facebook-f"></i></span></Link></li>
                                        <li><Link href="#"><span><i className="fa-brands fa-twitter"></i></span></Link></li>
                                        <li><Link href="#"><span><i className="fa-brands fa-instagram"></i></span></Link></li>
                                        <li><Link href="#"><span><i className="fa-brands fa-linkedin"></i></span></Link></li>
                                    </ul>
                                </div>

                                <div className="footer__widget-2">
                                    <h2 className="footer__widget-title">Information</h2>
                                    <ul className="footer__link">
                                        <li><Link href="/about">About Company</Link></li>
                                        <li><Link href="/portfolio">Case Study</Link></li>
                                        <li><Link href="/career">Career</Link></li>
                                        <li><Link href="/blog">blog</Link></li>
                                        <li><Link href="/contact">contact</Link></li>
                                    </ul>
                                </div>

                                <div className="footer__widget-3">
                                    <h2 className="footer__widget-title">Contact Us</h2>
                                    <ul className="footer__contact">
                                        <li>Valentin, Street Road 24, New York, USA - 67452</li>
                                        <li><Link href="tel:02574328301" className="phone">+02) 574 - 328 - 301 </Link></li>
                                        <li><Link href="mailto:info@buildyexample.com">info@buildyexample.com</Link></li>
                                    </ul>
                                </div>

                                <div className="footer__widget-4">
                                    <h2 className="project-title">Have a project in your mind?</h2>
                                    <div id="btn_wrapper">
                                        <Link href="/contact" className="wc-btn-primary btn-hover btn-item"><span></span> contact us <i
                                            className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                    <h3 className="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                                    <h4 className="contact-day">Saturday - Thursday</h4>
                                </div>

                                <div className="footer__copyright">
                                    <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/"
                                        target="_blank" rel="noreferrer">Wealcoder</Link>
                                    </p>
                                </div>

                                <div className="footer__subscribe">
                                    <form action="#">
                                        <input type="email" name="email" placeholder="Enter your email" />
                                        <button type="submit" className="subs-btn"><i className="fa-solid fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;