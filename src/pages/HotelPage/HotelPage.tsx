import HeroSection from '../../components/HeroSection/HeroSection';
import HotelBlock from './HotelBlock/HotelBlock';
import HotelData from './HotelData.json';

const HotelPage = () => {
  const data = HotelData;

  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-24">
      <HeroSection
        heading="Места, где стоит остановиться"
        description="Необычные отели: ледяные, капсульные, подземные — с рейтингами и ценами"
      />
      <HotelBlock data={data} />
    </div>
  );
};

export default HotelPage;
