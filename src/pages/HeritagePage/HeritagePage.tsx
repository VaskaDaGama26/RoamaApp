import HeroSection from '../../components/HeroSection/HeroSection';
import TimelineBlock from './TimelineBlock/TimelineBlock';

const HeritagePage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12">
      <HeroSection
        heading="Наследие человечества"
        description="Памятники ЮНЕСКО, древние руины, музеи — история, стоимость, как добраться"
      />
      <div className="px-2.5 lg:px-0">
        <TimelineBlock />
      </div>
    </div>
  );
};

export default HeritagePage;
