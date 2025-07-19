import PlaceCard from '../PlaceCard/PlaceCard';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton';
import { useState, useEffect } from 'react';
import Grid from '../../../components/Grid/Grid';
import placesData from '../placesData.json';
import type { PlaceItemData } from '../types';
import chooseIcon from '/places/click-here.svg';

const PlaceBlock = () => {
  const [selectedPlace, setSelectedPlace] = useState<PlaceItemData | null>(null);
  const data = placesData as PlaceItemData[];

  const handleCardClick = (item: PlaceItemData) => {
    setSelectedPlace(item);
  };

  const closeOverlay = () => {
    setSelectedPlace(null);
  };

  useEffect(() => {
    document.body.style.overflow = selectedPlace ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPlace]);

  return (
    <>
      <div className="flex flex-col px-2.5 mx-[52px] items-end gap-2">
        <p className="cursor-default text-xs rotate-z-3 text-(--gray)">Нажмите на карточку...</p>
        <img className="h-20" src={chooseIcon} alt="Choose Card" />
      </div>

      <Grid
        gridClass="places__grid"
        data={data}
        renderItem={(item) => <PlaceCard click={() => handleCardClick(item)} item={item} />}
      />

      {/* Overlay */}
      {selectedPlace && (
        <div
          className="fixed inset-0 pt-12 z-[1002] bg-[#000000b4] flex items-center justify-center"
          onClick={closeOverlay}
        >
          <div
            className="relative mx-2.5 md:mx-0 w-full md:w-3/5 h-[80vh] flex flex-col lg:flex-row bg-slate-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <LazyMediaWithSkeleton
              type="video"
              height="100%"
              className="w-full lg:w-2/5 shadow-xl object-contain"
              src={`${import.meta.env.BASE_URL}${selectedPlace.video}`}
            />
            <div className="w-full lg:w-3/5 flex flex-col gap-4 h-full p-6 text-white overflow-y-auto">
              <h2 className="text-base font-semibold border-b pb-2 border-gray-800">
                {selectedPlace.title}
              </h2>
              {selectedPlace.desc && (
                <p className="text-slate-400 text-sm/relaxed">{selectedPlace.desc}</p>
              )}
              {selectedPlace.author && (
                <p className="text-slate-700 text-right underline text-sm/relaxed">
                  {selectedPlace.author}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceBlock;
