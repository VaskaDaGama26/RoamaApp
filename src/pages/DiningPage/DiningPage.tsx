import ContinentChart from './ContinentChart/ContinentChart';
import ContinentFilter from './ContinentFilter.tsx/ContinentFilter';
import HeroSection from './HeroSection/HeroSection';

const DiningPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto my-20">
      <HeroSection />
      <ContinentChart />
      <ContinentFilter />
    </div>
  );
};

export default DiningPage;
