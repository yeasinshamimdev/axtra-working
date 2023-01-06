import Head from 'next/head';
import React, { useState } from 'react';
import CursorAnimation from '../../components/common/cursorAnimation';
import GoTopButton from '../../components/common/goTopButton';
import Offcanvas from '../../components/common/offcanvas';
import Placeholder from '../../components/common/placeholder';
import ScrollSmoother from '../../components/common/scrollSmoother';
import SwitcherAreaDark from '../../components/common/switcherAreaDark';
import ServiceHead from '../../components/service/serviceHead';
import ServiceSixCtaArea from '../../components/service/serviceSixCtaArea';
import ServiceSixFooter from '../../components/service/serviceSixFooter';
import ServiceSixMain from '../../components/service/serviceSixMain';

const ServiceSix = ({ dark }) => {
    const [stayDark, setStayDark] = useState(true)
    const handleDark = (prop) => {
        setStayDark(prop)
    }
    return (
        <div>
            <Head>
                <title>Service V.6 - Axtra</title>
                {/* Fav Icon */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png"></link>
            </Head>
            <body className={dark && stayDark && "dark"}>
                {/* Cursor Animation */}
                <CursorAnimation />

                {/* Preloader */}
                <Placeholder />
                {/* Switcher Area Start  */}
                <SwitcherAreaDark handleDark={handleDark} dark={dark} />
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <ScrollSmoother />

                {/* Go Top Button  */}
                <GoTopButton />
                {/* Header area start  */}
                <ServiceHead />
                {/* Header area end  */}

                {/* Offcanvas area start  */}
                <Offcanvas />
                {/* Offcanvas area end  */}

                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* Service main area start */}
                            <ServiceSixMain />
                            {/* Service main area start */}
                            {/* CTA area start */}
                            <ServiceSixCtaArea />
                            {/* CTA area end */}
                        </main>

                        {/* Footer area start */}
                        <ServiceSixFooter />
                        {/* Footer area end */}
                    </div>
                </div>
            </body>
        </div>
    );
};

export default ServiceSix;