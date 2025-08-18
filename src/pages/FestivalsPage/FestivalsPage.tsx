import HeroSection from '../../components/HeroSection/HeroSection';
import ArticleBlock from '../../components/Article/ArticleBlock/ArticleBlock';
import festivalsData from './festivalsData.json';

const FestivalsPage = () => {
  return (
    <div className="mx-auto mt-12 mb-24 max-w-[1020px]">
      <HeroSection
        testId="festivals"
        heading="Культуры и традиции"
        description="Фестивали, яркие народные праздники и культурные события по всему миру"
      />
      <ArticleBlock data={festivalsData} />
    </div>
  );
};

export default FestivalsPage;
