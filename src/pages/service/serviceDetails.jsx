import Head from 'next/head';
import React, { useState } from 'react';
import CtaArea from '../../components/common/ctaArea';
import CursorAnimation from '../../components/common/cursorAnimation';
import Footer from '../../components/common/footer';
import GoTopButton from '../../components/common/goTopButton';
import HeaderArea from '../../components/common/headerArea';
import Offcanvas from '../../components/common/offcanvas';
import Placeholder from '../../components/common/placeholder';
import ScrollSmoother from '../../components/common/scrollSmoother';
import SwitcherArea from '../../components/common/switcherArea';
import SwitcherAreaDark from '../../components/common/switcherAreaDark';
import ServiceDetailsArea from '../../components/service/serviceDetailsArea';
import ServiceDevelopmentArea from '../../components/service/serviceDevelopmentArea';
import ServiceFaq from '../../components/service/serviceFaq';
import ServiceWorkflowArea from '../../components/service/serviceWorkflowArea';

const ServiceDetails = ({ dark }) => {
    const [stayDark, setStayDark] = useState(true)
    const handleDark = (prop) => {
        setStayDark(prop)
    }
    return (
        <div>
            <Head>
                <title>Service Details - Axtra</title>
                {/* Fav Icon */}
                <link rel="icon" type="image/x-icon" href="assets/imgs/logo/favicon.png"></link>
            </Head>
            <main className={dark && stayDark && "dark"}>
                {/* Cursor Animation  */}
                <CursorAnimation />

                {/* Preloader  */}
                <Placeholder />

                {/* Switcher Area Start  */}
                <SwitcherAreaDark handleDark={handleDark} dark={dark} />
                {/* Switcher Area End  */}

                {/* Scroll Smoother  */}
                <ScrollSmoother />

                {/* Go Top Button  */}
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

                            {/* Development area start */}
                            <ServiceDevelopmentArea />
                            {/* Development area end */}

                            {/* Workflow area start */}
                            <ServiceWorkflowArea />
                            {/* Workflow area end */}

                            {/* Service detail area start */}
                            <ServiceDetailsArea />
                            {/* Service detail area end */}


                            {/* FAQ area start */}
                            <ServiceFaq />
                            {/* FAQ area end */}

                            {/* CTA area start */}
                            <CtaArea />
                            {/* CTA area end */}
                        </main>

                        {/* Footer area start */}
                        <Footer />
                        {/* Footer area end */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ServiceDetails;