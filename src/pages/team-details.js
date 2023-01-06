import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CtaArea from '../components/common/ctaArea';
import Footer from '../components/common/footer';
import Offcanvas from '../components/common/offcanvas';
import SwitcherArea from '../components/common/switcherArea';
import TeamDetails from './team/teamDetails';

const TeamDetailsPage = () => {
    return (
        <>
        <TeamDetails dark={false}/>
        </>
    );
};

export default TeamDetailsPage;