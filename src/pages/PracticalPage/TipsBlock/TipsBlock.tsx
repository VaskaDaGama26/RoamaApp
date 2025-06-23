import BlockHeading from '../../../components/BlockHeading';
import type { TipData } from '../types';

const TipsBlock = ({ data }: { data: TipData[] }) => {
  return (
    <div className="flex items-center flex-col gap-4 px-5 lg:px-0">
      <BlockHeading label="Советы" />
      <ul className="flex flex-col items-center text-center gap-4 text-sm/loose sm:text-base/normal">
        {data.map((tip, index) => (
          <li key={index} className="ps-1">
            {tip.emoji}
            {'  '}
            {tip.text}
            {'  '}
            {tip.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipsBlock;
