import Grid from './Grid/Grid';
import type { GridItemData } from './Grid/types';
import gridData from './Grid/gridData.json';
import MarqueeComp from './/Marquee/MarqueeComp';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import './Mainpage.css';

const MainPage = () => {
  return (
    <>
      <div className="bg-pattern"></div>
      <Header />
      <HeroSection />
      <Grid data={gridData as GridItemData[]} />
      <MarqueeComp />
      <Footer />
    </>
  );
};

export default MainPage;
