import Grid from './Grid/Grid';
import type { GridItemData } from './Grid/types';
import gridData from './Grid/gridData.json';
import HeroSection from './HeroSection/HeroSection';
import './Mainpage.css';

const MainPage = () => {
  return (
    <main>
      <div className="bg-pattern"></div>
      <HeroSection />
      <Grid data={gridData as GridItemData[]} />
    </main>
  );
};

export default MainPage;
