import type { DiningPlace } from '../types';

const DiningCard = ({ item }: { item: DiningPlace }) => {
  const { title, city, desc, bill, link } = item;
  return (
    <article
      key={title}
      className="rounded-xl bg-(--bg-neutral) p-4 shadow duration-300 hover:bg-(--bg-neutralHover)"
    >
      <a
        data-testid={`dining-link-${title}`}
        className="flex h-full cursor-pointer flex-col justify-between"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <h3 className="text-base font-semibold underline sm:text-lg">{title}</h3>
        <p className="mb-1 text-xs text-gray-500 sm:text-sm">{city}</p>
        <p className="my-2 hidden text-sm text-neutral-900 sm:block">{desc}</p>
        <p className="text-sm font-medium text-gray-900 sm:text-base">≈ ${bill}</p>
      </a>
    </article>
  );
};

export default DiningCard;
