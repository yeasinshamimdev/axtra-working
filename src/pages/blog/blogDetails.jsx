import Head from "next/head";
import { Fragment, useState } from "react";
import BlogDetail from "../../components/blog/blogDetail";
import RelatedBlog from "../../components/blog/relatedBlog";
import CtaArea from "../../components/common/ctaArea";
import CursorAnimation from "../../components/common/cursorAnimation";
import Footer from "../../components/common/footer";
import GoTopButton from "../../components/common/goTopButton";
import HeaderArea from "../../components/common/headerArea";
import Offcanvas from "../../components/common/offcanvas";
import Placeholder from "../../components/common/placeholder";
import ScrollSmoother from "../../components/common/scrollSmoother";
import SwitcherArea from "../../components/common/switcherArea";

export default function BaseBlogDetails({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                <title>Blog Details - Axtra</title>
                {/* Fav Icon */}
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
                            {/* Blog area start */}
                            <BlogDetail />
                            {/* Blog area end */}

                            {/* Related Blog area start */}
                            <RelatedBlog />
                            {/* Related Blog area end */}

                            {/* CTA area end */}
                            <CtaArea />
                            {/* CTA area end */}
                        </main>
                        <Footer />
                    </div>
                </div>
            </main >
        </Fragment>
    )
}