import type { DishItemData } from '../types';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton/LazyMediaWithSkeleton';

const DishCard = ({ item }: { item: DishItemData }) => {
  return (
    <article className="card w-full rounded-[6px] bg-(--bg-neutral) p-5 duration-300 hover:bg-(--bg-neutralHover)">
      <a
        data-testid="link"
        className="flex flex-col justify-between gap-2"
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
      >
        <LazyMediaWithSkeleton
          type="image"
          height="150px"
          smHeight="75px"
          src={item.image}
          alt={item.title}
        />
        <p className="h-fit text-sm font-medium sm:text-base">{item.title}</p>
        <p className="hidden text-sm font-light sm:block">{item.desc}</p>
      </a>
    </article>
  );
};

export default DishCard;
