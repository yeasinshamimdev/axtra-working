import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../components/common/cursorAnimation";
import Footer from "../../components/common/footer";
import GoTopButton from "../../components/common/goTopButton";
import HeaderArea from "../../components/common/headerArea";
import Offcanvas from "../../components/common/offcanvas";
import Placeholder from "../../components/common/placeholder";
import ScrollSmoother from "../../components/common/scrollSmoother";
import SwitcherArea from "../../components/common/switcherArea";
import FaqArea6 from "../../components/faq/faqArea6";
import FaqCtaArea from "../../components/faq/faqCta";

export default function FaqComponent({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                {/* Fav Icon  */}
                <title>FAQs - Axtra</title>
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>
            <main className={bgMode === "dark" ? "dark" : ""}>
                {/* Cursor Animation */}
                <CursorAnimation />

                {/* Preloader */}
                <Placeholder />

                {/* Switcher Area Start */}
                <SwitcherArea setBgMode={setBgMode} bgMode={bgMode} />
                {/* Switcher Area End */}

                {/* Scroll Smoother */}
                <ScrollSmoother />

                {/* Go Top Button */}
                <GoTopButton />

                {/* Header area start */}
                <HeaderArea />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* FAQ area start */}
                            <FaqArea6 />
                            {/* FAQ area end  */}

                            {/* CTA area start */}
                            <FaqCtaArea />
                            {/* CTA area end */}
                        </main>
                        {/* Footer area start */}
                        <Footer />
                        {/* Footer area end */}
                    </div>
                </div>
            </main >
        </Fragment >
    )
}