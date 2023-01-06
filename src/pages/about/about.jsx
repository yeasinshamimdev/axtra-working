import Head from "next/head";
import { Fragment, useState } from "react";
import CursorAnimation from "../../components/common/cursorAnimation";
import GoTopButton from "../../components/common/goTopButton";
import Offcanvas from "../../components/common/offcanvas";
import ScrollSmoother from "../../components/common/scrollSmoother";
import SwitcherArea from "../../components/common/switcherArea";
import HeaderArea from "../../components/common/headerArea";
import Placeholder from "../../components/common/placeholder";
import HeroAbout from "../../components/about/heroAbout";
import StoryAbout from "../../components/about/storyAbout";
import CounterAbout from "../../components/about/counterAbout";
import TeamAbout from "../../components/about/teamAbout";
import BrandAbout from "../../components/about/brandAbout";
import TestimonialAbout from "../../components/about/testimonialAbout";
import CtaArea from "../../components/common/ctaArea";
import Footer from "../../components/common/footer";

export default function BaseAbout({ mode }) {
    const [bgMode, setBgMode] = useState(mode);
    return (
        <Fragment>
            <Head>
                <title>About - Axtra</title>
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
            </Head>

            <main className={bgMode === "dark" ? "dark" : ""}>
                {/* Cursor Animation  */}
                <CursorAnimation />

                {/* Team Cursor  */}
                <div className="cursor" id="team_cursor">Drag</div>

                {/* Preloader  */}
                <Placeholder />

                {/* Switcher Area Start */}
                <SwitcherArea setBgMode={setBgMode} bgMode={bgMode} />
                {/* Switcher Area End */}

                {/* Scroll Smoother  */}
                <ScrollSmoother />


                {/* Go Top Button  */}
                <GoTopButton />


                {/* Header area start  */}
                <HeaderArea />
                {/* Header area end  */}

                {/* Offcanvas area start  */}
                <Offcanvas />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Hero area start  */}
                            <HeroAbout />
                            {/* Hero area end  */}

                            {/* Story area start  */}
                            <StoryAbout />
                            {/* Story area end  */}

                            {/* Counter area start  */}
                            <CounterAbout />
                            {/* Counter area end  */}

                            {/* Team area start  */}
                            <TeamAbout />
                            {/* Team area end  */}

                            {/* Brand area start  */}
                            <BrandAbout />
                            {/* Brand area end  */}

                            {/* Testimonial area start  */}
                            <TestimonialAbout />
                            {/* Testimonial area end  */}

                            {/* CTA area end  */}
                            <CtaArea />
                            {/* CTA area end  */}
                        </main>
                        {/* Footer area start  */}
                        <Footer />
                        {/* Footer area end  */}
                    </div>
                </div>
            </main>
        </Fragment>
    )
}