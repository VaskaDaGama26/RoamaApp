import HeroSection from '../../components/HeroSection/HeroSection';
import PlaceBlock from './PlaceBlock/PlaceBlock';
import placesData from './placesData.json';

const PlacesPage = () => {
  const data = placesData;

  return (
    <div className="mx-auto mt-12 max-w-[1020px]">
      <HeroSection
        testId="places"
        heading="Места с вау-видом"
        description="Фантастические локации Земли: природа, от которой захватывает дух"
      />
      <PlaceBlock data={data} />
    </div>
  );
};

export default PlacesPage;
