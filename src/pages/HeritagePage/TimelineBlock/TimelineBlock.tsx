import luggage from '/static/heritage/icons/luggage.svg';
import TimelineItem from '../TimelineItem/TimelineItem';
import type { TimelineItemType } from '../types';
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'motion/react';

const TimelineBlock = ({ data }: { data: TimelineItemType[] }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 75%'],
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} className="relative mb-24 pl-6 py-10 space-y-12">
      <motion.span style={{ height }} className="block w-1 bg-purple-500 absolute left-0 top-0" />
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
