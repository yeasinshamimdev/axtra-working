import Head from "next/head";
import { Fragment, useState } from "react";
import ErrorPage from "../../components/404/errorPage";
import CursorAnimation from "../../components/common/cursorAnimation";
import GoTopButton from "../../components/common/goTopButton";
import HeaderArea from "../../components/common/headerArea";
import Offcanvas from "../../components/common/offcanvas";
import Placeholder from "../../components/common/placeholder";
import ScrollSmoother from "../../components/common/scrollSmoother";
import SwitcherArea from "../../components/common/switcherArea";

export default function AxtraErrorPage({ mode }) {
    const [bgMode, setBgMode] = useState(mode);

    return (
        <Fragment>
            <Head>
                <title>404 - Axtra</title>
                {/* Fav Icon  */}
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
                            {/* Error page start  */}
                            <ErrorPage />
                            {/* Error page end  */}
                        </main>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}