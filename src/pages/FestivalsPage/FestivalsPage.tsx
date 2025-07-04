import HeroSection from '../../components/HeroSection/HeroSection';
import ArticleBlock from './Article/ArticleBlock/ArticleBlock';

const FestivalsPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-24">
      <HeroSection
        heading="Культуры и традиции"
        description="Фестивали, яркие народные праздники и культурные события по всему миру"
      />
      <ArticleBlock />
    </div>
  );
};

export default FestivalsPage;
