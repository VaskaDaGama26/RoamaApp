import HeroSection from '../../components/HeroSection/HeroSection';
import ArticleBlock from '../../components/Article/ArticleBlock/ArticleBlock';
import festivalsData from './festivalsData.json';

const FestivalsPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-24">
      <HeroSection
        heading="Культуры и традиции"
        description="Фестивали, яркие народные праздники и культурные события по всему миру"
      />
      <ArticleBlock data={festivalsData} />
    </div>
  );
};

export default FestivalsPage;
