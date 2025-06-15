import Grid from './components/Grid/Grid';
import type { GridItemData } from './components/Grid/types';
import gridData from './components/Grid/gridData.json';
import MarqueeComp from './components/Marquee/MarqueeComp';

function App() {
  return (
    <>
      <MarqueeComp />
      <Grid data={gridData as GridItemData[]} />
    </>
  );
}

export default App;
