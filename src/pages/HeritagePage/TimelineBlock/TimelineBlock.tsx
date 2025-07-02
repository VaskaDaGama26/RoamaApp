import luggage from '/heritage/icons/luggage.svg';
import TimelineItem from '../TimelineItem/TimelineItem';
import type { TimelineItemType } from '../types';
import heritageData from '../heritageData.json';

const TimelineBlock = () => {
  const data = heritageData as TimelineItemType[];
  return (
    <section className="relative mb-24 border-l-4 border-purple-500 pl-6 py-10 space-y-12">
      <div className="absolute top-0 right-[10px] group -translate-y-3 lg:-translate-y-8 h-fit">
        <img
          className="h-14 sm:h-20 transition-transform duration-300 group-hover:translate-y-[80px]"
          src={luggage}
          alt="Luggage Icon"
        />
      </div>
      {data.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </section>
  );
};

export default TimelineBlock;
