import type { HotelCardType } from '../types';
import moreIcon from '/static/icons/more.svg';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton/LazyMediaWithSkeleton';

const HotelCard = ({
  item,
  isActive,
  setActiveTitle,
}: {
  item: HotelCardType;
  isActive: boolean;
  setActiveTitle: (title: string | null) => void;
}) => {
  const { title, desc, location, image, link } = item;

  const handleClick = () => {
    setActiveTitle(isActive ? null : title);
  };

  return (
    <article
      onClick={handleClick}
      className={`h-full w-full cursor-pointer duration-300 [perspective:1000px]`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-1000 [transform-style:preserve-3d] ${
          isActive ? 'rotate-y-180' : ''
        } ${!isActive ? 'hover:-translate-y-2' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 overflow-hidden rounded-xl backface-hidden">
          <LazyMediaWithSkeleton
            className="h-full w-full object-cover"
            height="400px"
            type="image"
            alt={title}
            src={`${import.meta.env.BASE_URL}${image}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00000013] to-[#000000bc]"></div>
          <div className="pointer-events-none absolute bottom-8 z-10 flex w-full flex-col items-center gap-2 text-white">
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="text-sm">{location}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex rotate-y-180 flex-col gap-6 rounded-xl bg-neutral-100 p-4 backface-hidden">
          <p className="text-justify text-sm/relaxed">{desc}</p>
          <a
            className="group flex flex-row items-center gap-1 text-sm text-gray-500 transition-transform lg:text-base"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            Подробнее
            <img
              className="mt-1 h-4 w-4 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              src={moreIcon}
              alt="Подробнее"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
