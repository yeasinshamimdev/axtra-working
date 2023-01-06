import Link from "next/link";

export default function HomeFooter2() {
    return (
        <footer class="footer__area-2 pt-130">
            <div class="container">
                <div class="footer__top-2 text-anim">
                    <div class="row">
                        <div class="col-xxl-12">
                            <h2 class="sec-title-3 title-anim">Get started <br /> now</h2>
                            <p class="footer__sub-title">If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
                        </div>
                    </div>
                </div>

                <div class="footer__middle-2">
                    <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div class="footer__location-2">
                                <div class="location">
                                    <h3>London</h3>
                                    <p>Baltia Squar, Mark Street, <br />
                                        London</p>
                                </div>
                                <div class="location">
                                    <h3>New York</h3>
                                    <p>Nenuya Centre, Elia Street <br />
                                        New York, USA</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div class="footer__subscribe-2">
                                <form action="#">
                                    <input type="text" name="email" placeholder="Enter your email" />
                                    <button type="submit" class="submit"><img src="assets/imgs/icon/arrow-black.png"
                                        alt="Arrow Icon" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer__btm-2">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                            <div class="footer__copyright-2">
                                <p>© 2022 - 2025 | Alrights reserved by <Link href="https://wealcoder.com/" target="_blank">Wealcoder</Link>
                                </p>
                            </div>
                        </div>
                        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                            <div class="footer__nav">
                                <ul class="footer-menu menu-anim">
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
    )
}