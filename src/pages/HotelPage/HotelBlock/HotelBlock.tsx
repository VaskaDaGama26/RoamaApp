import { useState } from 'react';
import Grid from '../../../components/Grid/Grid';
import HotelCard from '../HotelCard/HotelCard';

import type { HotelCardType } from '../types';
import chooseIcon from '/static/hotels/icons/chooseCard.svg';

const HotelBlock = ({ data }: { data: HotelCardType[] }) => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col items-end gap-2 px-2.5">
        <p className="rotate-z-3 cursor-default text-xs text-(--gray)">Нажмите на карточку...</p>
        <img className="h-20" src={chooseIcon} alt="Choose Card" />
      </div>
      <Grid
        data={data}
        gridClass="hotel__grid"
        renderItem={(card) => (
          <HotelCard
            item={card}
            isActive={activeTitle === card.title}
            setActiveTitle={setActiveTitle}
          />
        )}
      />
    </>
  );
};

export default HotelBlock;
