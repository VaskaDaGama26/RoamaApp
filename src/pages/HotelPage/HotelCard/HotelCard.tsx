import type { HotelCardType } from '../types';
import moreIcon from '/icons/more.svg';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton';

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
      className={`[perspective:1000px] duration-300 cursor-pointer w-full h-full`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${
          isActive ? 'rotate-y-180' : ''
        } ${!isActive ? 'hover:-translate-y-2' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
          <LazyMediaWithSkeleton
            className="w-full h-full object-cover"
            height='400px'
            type="image"
            src={`${import.meta.env.BASE_URL}${image}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00000013] to-[#000000bc]"></div>
          <div className="absolute text-white bottom-8 w-full flex flex-col gap-2 items-center z-10 pointer-events-none">
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="text-sm">{location}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-neutral-100 rounded-xl p-4 flex flex-col gap-6">
          <p className="text-sm/relaxed text-justify">{desc}</p>
          <a
            className="text-gray-500 text-sm lg:text-base flex flex-row gap-1 items-center group transition-transform"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            Подробнее
            <img
              className="duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1 w-4 h-4"
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
