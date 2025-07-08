import BlockHeading from '../../../../components/BlockHeading';
import LazyMediaWithSkeleton from '../../../../components/LazyMediaWithSkeleton';
import type { ArticleItemType } from '../../types';
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
          type="video"
          src={`${import.meta.env.BASE_URL}${item.video}`}
          height="320px"
          className="rounded-md h-80 w-full object-cover object-bottom"
        />
      )}
      <ArticleParagraphBlock paragraphs={item.textParagraphs.slice(2)} />
      {/* Images */}
      {item.imageGallery && (
        <div className="flex flex-col lg:flex-row w-full gap-8 items-center">
          {item.imageGallery.map((image, index) => (
            <LazyMediaWithSkeleton
              type="image"
              className="rounded-md max-h-80"
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
