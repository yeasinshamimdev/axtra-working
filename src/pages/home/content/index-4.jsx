import { Fragment, useState } from "react";
import Head from "next/head";
import CursorAnimation from "../../../components/common/cursorAnimation";
import Placeholder from "../../../components/common/placeholder";
import SwitcherArea from "../../../components/common/switcherArea";
import GoTopButton from "../../../components/common/goTopButton";
import ScrollSmoother from "../../../components/common/scrollSmoother";
import HeaderArea4 from "../../../components/home/head/headerArea4";
import Offcanvas from "../../../components/common/offcanvas";
import HomePortfolioArea4 from "../../../components/home/portfolio/homePortfolio4";

export default function Index4({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                {/* Fav Icon  */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png" />
                <title>Portfolio 2</title>
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
                <HeaderArea4 />
                {/* Header area end */}

                {/* Offcanvas area start */}
                <Offcanvas />
                {/* Offcanvas area end */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <HomePortfolioArea4 />
                        </main>
                    </div>
                </div>
            </main >
        </Fragment>
    )
}