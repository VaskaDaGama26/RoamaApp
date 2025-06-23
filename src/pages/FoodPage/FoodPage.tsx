import HeroSection from '../../components/HeroSection/HeroSection';
import Grid from '../../components/Grid/Grid';
import DishCard from './DishCard/DishCard';
import WorldMap from './WorldMap/WorldMap';
import placesData from './dishData.json';
import type { DishItemData } from './types';

const FoodPage = () => {
  const data = placesData as DishItemData[];
  return (
    <div className="max-w-[1020px] mx-auto mt-12">
      <HeroSection
        heading="Попробуйте планету на вкус"
        description="От Брискета до Суши — гастрономическое путешествие по 12 странам"
      />
      <WorldMap data={data} />
      <Grid gridClass="food__grid" data={data} renderItem={(item) => <DishCard item={item} />} />
    </div>
  );
};

export default FoodPage;
