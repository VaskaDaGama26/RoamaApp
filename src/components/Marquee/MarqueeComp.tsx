import Marquee from 'react-fast-marquee';
import './Marquee.css';
import MarqueeLabel from './MarqueeLabel';

import car from '/icons/marquee/car.svg';

const MarqueeComp = () => {
  return (
    <div className="marquee_block flex flex-row items-center h-10 text-base/tight">
      <Marquee autoFill={true}>
        <MarqueeLabel left={car} right={car} label="меньше вещей — больше впечатлений и свободы" />
        <MarqueeLabel left={car} right={car} label="открой мир — каждое путешествие меняет тебя" />
        <MarqueeLabel
          left={car}
          right={car}
          label="путешествуй легко, живи ярко, вдохновляйся всегда"
        />
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
