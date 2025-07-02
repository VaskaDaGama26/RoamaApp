import HeroSection from '../../components/HeroSection/HeroSection';
import AppsBlock from './AppsBlock/AppsBlock';
import appsData from './AppsBlock/appsData.json';
import ChecklistBlock from './ChecklistBlock/ChecklistBlock';
import checklistData from './ChecklistBlock/checklistData.json';

const PracticalPage = () => {
  const checklistsDataObject = checklistData[0];

  return (
    <div className="max-w-[1020px] mx-auto mt-12">
      <HeroSection
        heading="Полезное и практичное"
        description="Чеклисты, приложения — всё для комфортного и безопасного путешествия"
      />
      <ChecklistBlock data={checklistsDataObject} />
      <AppsBlock data={appsData} />
    </div>
  );
};

export default PracticalPage;
