import HeroSection from '../../components/HeroSection/HeroSection';
import TimelineBlock from './TimelineBlock/TimelineBlock';
import heritageData from './heritageData.json';

const HeritagePage = () => {
  const data = heritageData;

  return (
    <div className="mx-auto mt-12 max-w-[1020px]">
      <HeroSection
        testId="heritage"
        heading="Наследие человечества"
        description="Памятники ЮНЕСКО, древние руины, музеи — история, стоимость, как добраться"
      />
      <div className="px-2.5 lg:px-0">
        <TimelineBlock data={data} />
      </div>
    </div>
  );
};

export default HeritagePage;
