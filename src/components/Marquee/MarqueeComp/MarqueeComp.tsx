import Marquee from 'react-fast-marquee';
import '../Marquee.css';
import MarqueeLabel from '../MarqueeLabel/MarqueeLabel';
import car from '/static/icons/marquee/car.svg';

const MarqueeComp = () => {
  return (
    <div className="marquee_block flex flex-row items-center h-10 text-base/tight">
      <Marquee autoFill={true}>
        <MarqueeLabel
          icon={car}
          data-testid="label-1"
          label="меньше вещей — больше впечатлений и свободы"
        />
        <MarqueeLabel
          icon={car}
          data-testid="label-2"
          label="открой мир — каждое путешествие меняет тебя"
        />
        <MarqueeLabel
          icon={car}
          data-testid="label-3"
          label="путешествуй легко, живи ярко, вдохновляйся всегда"
        />
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
