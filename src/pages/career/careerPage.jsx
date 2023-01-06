import Head from "next/head";
import { Fragment, useState } from "react";
import CareerArea from "../../components/career/careerArea";
import CareerBenefit from "../../components/career/careerBenefit";
import CareerGallery from "../../components/career/careerGallery";
import CareerHero from "../../components/career/careerHero";
import CursorAnimation from "../../components/common/cursorAnimation";
import Footer from "../../components/common/footer";
import GoTopButton from "../../components/common/goTopButton";
import HeaderArea from "../../components/common/headerArea";
import Offcanvas from "../../components/common/offcanvas";
import Placeholder from "../../components/common/placeholder";
import ScrollSmoother from "../../components/common/scrollSmoother";
import SwitcherArea from "../../components/common/switcherArea";

export default function CareerPage({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
                <title>Career -Axtra</title>
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
                            {/* Hero area start */}
                            <CareerHero />
                            {/* Hero area start */}

                            {/* Career Gallery area start */}
                            <CareerGallery />
                            {/* Career Gallery area end */}

                            {/* Career area start */}
                            <CareerArea />
                            {/* Career area end */}

                            {/* Career Benefit area start */}
                            <CareerBenefit />
                            {/* Career Benefit area end */}
                        </main>
                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end    */}
                    </div>
                </div>
            </main >
        </Fragment>
    )
}