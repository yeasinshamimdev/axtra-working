import '../../styles/globals.css'
import '../../public/assets/css/all.min.css';
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/locomotive-scroll.min.css'
import '../../public/assets/css/master.css'
import '../../public/assets/css/meanmenu.min.css'
import '../../public/assets/css/swiper-bundle.min.css'
import UseScript from '../../scripts/useScript';
import NoSSR from 'react-no-ssr';
import Placeholder from '../components/common/placeholder.jsx';

function MyApp({ Component, pageProps }) {

  return <NoSSR onSSR={<Placeholder />}>
    <Component {...pageProps} />
    <UseScript src={['assets/js/jquery-3.6.0.min.js', 'assets/js/bootstrap.bundle.min.js', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', 'assets/js/counter.js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js', 'assets/js/ScrollTrigger.min.js', 'assets/js/ScrollToPlugin.min.js', 'assets/js/ScrollSmoother.min.js', 'assets/js/SplitText.min.js', 'assets/js/chroma.min.js', 'assets/js/jquery.meanmenu.min.js', 'assets/js/main.js']} />
  </NoSSR>
}

export default MyApp