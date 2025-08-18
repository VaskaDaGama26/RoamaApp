import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton/LazyMediaWithSkeleton';
import type { TimelineItemType } from '../types';

const TimelineItem = ({ item }: { item: TimelineItemType }) => {
  return (
    <div className="relative pl-2 sm:pl-6">
      {/* Кружок */}
      <div className="absolute top-1 -left-[1.15rem] h-5 w-5 rounded-full border-4 border-white bg-purple-500"></div>
      {/* Контент */}
      <a
        data-testid="link"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
        href={item.link}
      >
        <div className="w-full rounded-xl border border-gray-100 bg-white p-5 shadow-lg transition-transform duration-400 hover:translate-x-4">
          <p className="text-sm font-medium text-purple-600">
            <span className="text-lg font-semibold">{item.era}</span>&nbsp; — &nbsp;{item.year}
          </p>
          <h3 className="my-2 text-xl font-semibold">{item.title}</h3>
          {item.gallery ? (
            <div className="flex flex-row gap-4">
              <LazyMediaWithSkeleton
                type="image"
                className="w-full rounded-lg object-cover lg:w-3/4"
                height="256px"
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={item.title}
              />
              <div className="hidden w-1/4 flex-col justify-center gap-8 lg:flex">
                {item.gallery.map((image, index) => (
                  <LazyMediaWithSkeleton
                    type="image"
                    key={index}
                    className="w-full rounded-lg object-cover"
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
              className="w-full rounded-lg object-cover lg:w-3/4"
              height="256px"
              src={`${import.meta.env.BASE_URL}${item.image}`}
              alt={item.title}
            />
          )}

          <p className="my-2 text-gray-700">{item.description}</p>
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
