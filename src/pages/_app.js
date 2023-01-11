import '../../styles/globals.css'
import '../../public/assets/css/all.min.css';
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/locomotive-scroll.min.css'
import '../../public/assets/css/master.css'
import '../../public/assets/css/meanmenu.min.css'
import '../../public/assets/css/swiper-bundle.min.css'
import $ from 'jquery';
import Swiper from 'swiper';
import gsap from 'gsap';
import UseScript from '../../scripts/useScript';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Placeholder from '../components/common/placeholder';

function MyApp({ Component, pageProps }) {

  return <>
    <Script src='assets/js/jquery-3.6.0.min.js' />
    <Script src='assets/js/jquery.meanmenu.min.js' />
    <Script src='assets/js/bootstrap.bundle.min.js' />
    <Script src='assets/js/swiper-bundle.min.js' />
    <Script src='assets/js/counter.js' />
    <Script src='assets/js/TweenMax.min.js' />
    <Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js' />
    <Script src='assets/js/ScrollTrigger.min.js' />
    <Script src='assets/js/ScrollToPlugin.min.js' />
    <Script src='assets/js/ScrollSmoother.min.js' />
    <Script src='assets/js/SplitText.min.js' />
    <Script src='assets/js/chroma.min.js' />
    <Component {...pageProps} />
    <UseScript src={['assets/js/main.js']} />

  </>
}

export default MyApp