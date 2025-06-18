import Grid from './components/Grid/Grid';
import type { GridItemData } from './components/Grid/types';
import gridData from './components/Grid/gridData.json';
import MarqueeComp from './components/Marquee/MarqueeComp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Grid data={gridData as GridItemData[]} />
      <MarqueeComp />
      <Footer />
    </>
  );
}

export default App;
