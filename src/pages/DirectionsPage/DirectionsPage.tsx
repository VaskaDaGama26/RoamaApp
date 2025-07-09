import HeroSection from '../../components/HeroSection/HeroSection';
import DirectionBlock from './DirectionBlock/DirectionBlock';

const DirectionsPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-24">
      <HeroSection
        heading="Потрясающие маршруты"
        description="Захватывающие путешествия: поездом, авто или пешком — с транспортом и уровнем сложности"
      />
      <DirectionBlock />
    </div>
  );
};

export default DirectionsPage;
