import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/swiper-bundle.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
