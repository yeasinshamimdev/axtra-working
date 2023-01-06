import Link from "next/link";

export default function FaqCtaArea() {
    return (
        <section class="faq__btm">
            <div class="container line pb-130">
                <div class="line-3"></div>
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="sec-title-wrapper">
                            <h2 class="sec-title title-anim">Still you have question?</h2>
                            <p class="sub-title-anim">Well, we are packed, so no open vacancies now</p>
                            <div id="btn_wrapper">
                                <Link href="/contact" class="wc-btn-primary btn-hover btn-item"><span></span>Contact Us <i
                                    class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}