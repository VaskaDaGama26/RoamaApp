import BlockHeading from '../../BlockHeading/BlockHeading';
import LazyMediaWithSkeleton from '../../LazyMediaWithSkeleton/LazyMediaWithSkeleton';
import type { ArticleItemType } from '../types';
import ArticleParagraphBlock from '../ParagraphBlock/ArticleParagraphBlock';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const ArticleItem = ({ item }: { item: ArticleItemType }) => {
  return (
    <article className="flex flex-col items-start gap-8">
      <BlockHeading label={item.title} />
      <ArticleParagraphBlock paragraphs={item.textParagraphs.slice(0, 2)} />
      {/* Video */}
      {item.video && (
        <LazyMediaWithSkeleton
          data-testid="test-video"
          type="video"
          src={`${import.meta.env.BASE_URL}${item.video}`}
          height="320px"
          className="h-80 w-full rounded-md object-cover object-bottom"
        />
      )}
      <ArticleParagraphBlock paragraphs={item.textParagraphs.slice(2)} />
      {/* Images */}
      {item.imageGallery && (
        <div data-testid="gallery" className="flex w-full flex-col items-center gap-8 lg:flex-row">
          {item.imageGallery.map((image, index) => (
            <LazyMediaWithSkeleton
              type="image"
              className="max-h-80 rounded-md"
              key={index}
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={item.title}
            />
          ))}
        </div>
      )}
      {/* Details */}
      <ArticleDetails place={item.place} time={item.time} link={item.link} />
    </article>
  );
};

export default ArticleItem;
