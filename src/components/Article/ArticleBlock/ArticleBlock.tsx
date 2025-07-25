import type { ArticleItemType } from '../types';
import ArticleItem from '../ArticleItem/ArticleItem';

const ArticleBlock = ({ data }: { data: ArticleItemType[] }) => {
  return (
    <div className="mt-16 flex flex-row gap-16 flex-wrap px-2.5 lg:px-0">
      {data.map((item, index) => (
        <ArticleItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ArticleBlock;
