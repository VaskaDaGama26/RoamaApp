import DishGrid from './DishGrid/DishGrid';
import HeroSection from './HeroSection/HeroSection';
import WorldMap from './WorldMap/WorldMap';
import placesData from './dishData.json';
import type { DishItemData } from './types';

const FoodPage = () => {
  const data = placesData as DishItemData[];
  return (
    <div className="max-w-[1020px] mx-auto mt-20">
      <HeroSection />
      <WorldMap data={data} />
      <DishGrid data={data} />
    </div>
  );
};

export default FoodPage;
