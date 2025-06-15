import Grid from './components/Grid/Grid';
import type { GridItemData } from './components/Grid/types';
import gridData from './components/Grid/gridData.json';

function App() {
  return (
    <>
      <Grid data={gridData as GridItemData[]} />
    </>
  );
}

export default App;
