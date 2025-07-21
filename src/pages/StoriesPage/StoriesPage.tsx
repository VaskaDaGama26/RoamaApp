import HeroSection from '../../components/HeroSection/HeroSection';
import ArticleBlock from '../../components/Article/ArticleBlock/ArticleBlock';
import storiesData from './storiesData.json';

const StoriesPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-24">
      <HeroSection
        heading="Культуры и традиции"
        description="Фестивали, яркие народные праздники и культурные события по всему миру"
      />
      <ArticleBlock data={storiesData} />
    </div>
  );
};

export default StoriesPage;
