import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton';
import type { TimelineItemType } from '../types';

const TimelineItem = ({ item }: { item: TimelineItemType }) => {
  return (
    <div className="relative pl-2 sm:pl-6">
      {/* Кружок */}
      <div className="absolute -left-[1.15rem] top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-white"></div>
      {/* Контент */}
      <a target="_blank" rel="noopener noreferrer" className="relative" href={item.link}>
        <div className="transition-transform duration-400 hover:translate-x-4 bg-white w-full shadow-lg p-5 rounded-xl border border-gray-100">
          <p className="text-sm text-purple-600 font-medium">
            <span className="text-lg font-semibold">{item.era}</span>&nbsp; — &nbsp;{item.year}
          </p>
          <h3 className="text-xl font-semibold my-2">{item.title}</h3>
          {item.gallery ? (
            <div className="flex flex-row gap-4">
              <LazyMediaWithSkeleton
                type="image"
                className="w-full lg:w-3/4 object-cover rounded-lg"
                height="256px"
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={item.title}
              />
              <div className="hidden lg:flex flex-col w-1/4 justify-center gap-8">
                {item.gallery.map((image, index) => (
                  <LazyMediaWithSkeleton
                    type="image"
                    key={index}
                    className="w-full object-cover rounded-lg"
                    height="112px"
                    src={`${import.meta.env.BASE_URL}${image}`}
                    alt={item.title}
                  />
                ))}
              </div>
            </div>
          ) : (
            <LazyMediaWithSkeleton
              type="image"
              className="w-full lg:w-3/4 object-cover rounded-lg"
              height="256px"
              src={`${import.meta.env.BASE_URL}${item.image}`}
              alt={item.title}
            />
          )}

          <p className="text-gray-700 my-2">{item.description}</p>
          <p className="text-sm text-gray-500">
            <strong>Как добраться:&nbsp;</strong> {item.howToGetThere}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Стоимость:&nbsp;</strong> {item.price}
          </p>
        </div>
      </a>
    </div>
  );
};

export default TimelineItem;
