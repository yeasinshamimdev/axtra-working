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
import SwitcherAreaDark from '../../components/common/switcherAreaDark';
import TeamArea from '../../components/team/teamDetailsArea';

const TeamDetails = ({ dark }) => {
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

                {/* Scroll Smoother   */}
                <ScrollSmoother />


                {/* Go Top Button   */}
                <GoTopButton />

                {/* Header area start   */}
                <HeaderArea />
                {/* Header area end   */}


                {/* Offcanvas area start   */}
                <Offcanvas />
                {/* Offcanvas area end   */}


                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="team__detail-page">
                                <span className="line-1"></span>
                                <span className="line-2"></span>
                                <span className="line-3"></span>


                                {/* Team area start   */}
                                <TeamArea />
                                {/* Team area end   */}

                                {/* CTA area start   */}
                                <CtaArea pt130={true} />
                                {/* CTA area end   */}

                            </div>
                        </main>

                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end    */}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default TeamDetails;