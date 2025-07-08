import { useState } from 'react';
import Grid from '../../../components/Grid/Grid';
import HotelCard from '../HotelCard/HotelCard';
import HotelData from '../HotelData.json';
import type { HotelCardType } from '../types';
import chooseIcon from '/hotels/icons/chooseCard.svg';

const HotelBlock = () => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const data = HotelData as HotelCardType[];
  return (
    <>
      <div className="flex flex-col px-2.5 items-end gap-2">
        <p className="cursor-default text-xs rotate-z-3 text-(--gray)">Нажмите на карточку...</p>
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
