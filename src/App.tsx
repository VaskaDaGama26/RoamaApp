import Grid from './components/Grid/Grid';
import type { GridItemData } from './components/Grid/types';
import gridData from './components/Grid/gridData.json';
import MarqueeComp from './components/Marquee/MarqueeComp';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Grid data={gridData as GridItemData[]} />
      <MarqueeComp />
    </>
  );
}

export default App;
