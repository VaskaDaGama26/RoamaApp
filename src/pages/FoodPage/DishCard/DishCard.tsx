import React from 'react';
import type { DishItemData } from '../types';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton';

const DishCard: React.FC<{ item: DishItemData }> = ({ item }) => {
  return (
    <article className="p-5 bg-(--bg-neutral) duration-300 hover:bg-(--bg-neutralHover) rounded-[6px] w-full card">
      <a
        className="flex flex-col gap-2 justify-between"
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
        <p className="h-fit text-sm sm:text-base font-medium">{item.title}</p>
        <p className="hidden sm:block text-sm font-light">{item.desc}</p>
      </a>
    </article>
  );
};

export default DishCard;
