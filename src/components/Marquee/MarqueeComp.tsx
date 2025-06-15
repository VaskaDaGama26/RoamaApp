import Marquee from 'react-fast-marquee';
import './Marquee.css';
import MarqueeLabel from './MarqueeLabel';

import left from '/icons/marquee/arrow_left.svg';
import right from '/icons/marquee/arrow_right.svg';

const MarqueeComp = () => {
  return (
    <div className="marquee_block flex flex-row items-center h-10 text-base/tight tracking-tighter">
      <Marquee autoFill={true}>
        <MarqueeLabel
          left={left}
          right={right}
          label="меньше вещей — больше впечатлений и свободы"
        />
        <MarqueeLabel
          left={left}
          right={right}
          label="открой мир — каждое путешествие меняет тебя"
        />
        <MarqueeLabel
          left={left}
          right={right}
          label="путешествуй легко, живи ярко, вдохновляйся всегда"
        />
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
