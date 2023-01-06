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
import TeamAreaMain from '../../components/team/teamAreaMain';
import TeamBottomArea from '../../components/team/teamBottomArea';
import TeamCounterArea from '../../components/team/teamCounterArea';
import TeamCursor from '../../components/team/teamCursor';

const TeamPage = ({ dark }) => {
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

                {/* Team Cursor   */}
                <TeamCursor />
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


                            {/* Team area start   */}
                            <TeamAreaMain />
                            {/* Team area end   */}


                            {/* Team area bottom start */}
                            <TeamBottomArea />
                            {/* Team area bottom end */}

                            {/* Counter area start   */}
                            <TeamCounterArea />
                            {/* Counter area end   */}

                            {/* CTA area start   */}
                            <CtaArea pt130={true} />
                            {/* CTA area end   */}

                        </main>

                        {/* Footer area start   */}
                        <Footer />
                        {/* Footer area end   */}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default TeamPage;