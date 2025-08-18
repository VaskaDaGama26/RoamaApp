import HeroSection from '../../components/HeroSection/HeroSection';
import ArticleBlock from '../../components/Article/ArticleBlock/ArticleBlock';
import storiesData from './storiesData.json';

const StoriesPage = () => {
  return (
    <div className="mx-auto mt-12 mb-24 max-w-[1020px]">
      <HeroSection
        testId="stories"
        heading="Путешествия в книгах и кино"
        description="Откройте для себя реальные места, вдохновившие великих писателей или ставшие декорациями культовых фильмов."
      />

      <ArticleBlock data={storiesData} />
    </div>
  );
};

export default StoriesPage;
