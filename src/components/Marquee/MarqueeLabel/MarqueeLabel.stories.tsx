import MarqueeLabel from './MarqueeLabel';
import '../../index.css';
import '../../colors.css';
import icon from '/static/icons/marquee/car.svg';

export default {
  title: 'components/MarqueeLabel',
  component: MarqueeLabel,
  tags: ['autodocs'],
};

export const Default = () => {
  return <MarqueeLabel label="меньше вещей — больше впечатлений и свободы" icon={icon} />;
};

export const WithLongLabel = () => {
    return <MarqueeLabel label="меньше вещей — больше впечатлений и свободы, открой мир — каждое путешествие меняет тебя" icon={icon} />;
}