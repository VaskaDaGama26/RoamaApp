import { useState } from 'react';
import diningData from '../diningData.json';
import DiningCard from '../DiningCard/DiningCard';
import FilterButtons from '../FilterButtons/FilterButtons';
import Grid from '../../../components/Grid/Grid';

const ContinentFilter = () => {
  const [activeContinent, setActiveContinent] = useState<string | null>(null);
  const allContinents: string[] = Array.from(new Set(diningData.map((item) => item.continent)));

  const filteredData = activeContinent
    ? diningData.filter((item) => item.continent === activeContinent)
    : diningData;

  return (
    <div className="w-full max-w-5xl mx-auto px-2.5 lg:px-0 mt-10">
      <FilterButtons
        continents={allContinents}
        activeContinent={activeContinent}
        onSelect={setActiveContinent}
      />

      <Grid
        data={filteredData}
        gridClass="dining__grid"
        renderItem={(place) => <DiningCard item={place} />}
      />
    </div>
  );
};

export default ContinentFilter;
