import HeroSection from '../../components/HeroSection/HeroSection';
import DirectionBlock from './DirectionBlock/DirectionBlock';
import directionsData from './directionsData.json';
import type { DirectionItemType } from './types';

const DirectionsPage = () => {
  const data = directionsData as DirectionItemType[];
  return (
    <div className="mx-auto mt-12 mb-24 max-w-[1020px]">
      <HeroSection
        testId="directions"
        heading="Потрясающие маршруты"
        description="Захватывающие путешествия: поездом, авто или пешком"
      />
      <DirectionBlock data={data} />
    </div>
  );
};

export default DirectionsPage;
