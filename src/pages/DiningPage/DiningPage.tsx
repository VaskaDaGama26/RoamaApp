import ContinentChart from './ContinentChart/ContinentChart';
import ContinentFilter from './ContinentFilter/ContinentFilter';
import HeroSection from '../../components/HeroSection/HeroSection';
import { getChartData } from './utils/getChartData';

const DiningPage = () => {
  const data = getChartData();

  return (
    <div className="mx-auto mt-12 mb-20 max-w-[1020px]">
      <HeroSection
        testId="dining"
        heading="Знаменитые заведения мира"
        description="Исторические бары, культовые кофейни и атмосферные рестораны"
      />
      <ContinentChart data={data} />
      <ContinentFilter />
    </div>
  );
};

export default DiningPage;
