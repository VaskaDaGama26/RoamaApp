import HeroSection from '../../components/HeroSection/HeroSection';
import HotelBlock from './HotelBlock/HotelBlock';

const HotelPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-24">
      <HeroSection
        heading="Места, где стоит остановиться"
        description="Необычные отели: ледяные, капсульные, подземные — с рейтингами и ценами"
      />
      <HotelBlock />
    </div>
  );
};

export default HotelPage;
