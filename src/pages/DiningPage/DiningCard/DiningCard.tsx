import type { DiningPlace } from '../types';

const DiningCard = ({ item }: { item: DiningPlace }) => {
  const { title, city, desc, bill, link } = item;
  return (
    <article
      key={title}
      className="duration-300 bg-(--bg-neutral) hover:bg-(--bg-neutralHover) shadow rounded-xl p-4 tracking-tighter"
    >
      <a
        className="h-full flex flex-col justify-between cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <h3 className="text-base underline sm:text-lg font-semibold">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-1">{city}</p>
        <p className="hidden sm:block text-sm text-neutral-900 my-2">{desc}</p>
        <p className="text-sm sm:text-base font-medium text-gray-900">≈ ${bill}</p>
      </a>
    </article>
  );
};

export default DiningCard;
