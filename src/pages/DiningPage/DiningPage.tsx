import ContinentChart from './ContinentChart/ContinentChart';
import ContinentFilter from './ContinentFilter/ContinentFilter';
import HeroSection from '../../components/HeroSection/HeroSection';

const DiningPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-20">
      <HeroSection
        heading="Знаменитые заведения мира"
        description="Исторические бары, культовые кофейни и атмосферные рестораны"
      />
      <ContinentChart />
      <ContinentFilter />
    </div>
  );
};

export default DiningPage;
