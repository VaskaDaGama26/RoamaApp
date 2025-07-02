import Grid from '../../components/Grid/Grid';
import type { GridItemData } from './types';
import gridData from './gridData.json';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import './Mainpage.css';
import GridItem from './GridItem/GridItem';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MainPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <main>
      <div className="bg-pattern"></div>
      <WelcomeSection />
      <Grid
        id="grid"
        data={gridData as GridItemData[]}
        gridClass="main__grid scroll-mt-24"
        renderItem={(item) => <GridItem item={item} />}
      />
    </main>
  );
};

export default MainPage;
