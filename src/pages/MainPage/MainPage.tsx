import Grid from '../../components/Grid/Grid';
import type { GridItemData } from './types';
import gridData from './gridData.json';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import './Mainpage.css';
import GridItem from './GridItem/GridItem';

const MainPage: React.FC = () => {
  return (
    <main>
      <div className="bg-pattern"></div>
      <WelcomeSection />
      <Grid
        data={gridData as GridItemData[]}
        gridClass="main__grid"
        renderItem={(item) => <GridItem item={item} />}
      />
    </main>
  );
};

export default MainPage;
