import PlaceCard from '../PlaceCard/PlaceCard';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton/LazyMediaWithSkeleton';
import { useState, useEffect } from 'react';
import Grid from '../../../components/Grid/Grid';
import type { PlaceItemData } from '../types';
import chooseIcon from '/static/places/click-here.svg';

const PlaceBlock = ({ data }: { data: PlaceItemData[] }) => {
  const [selectedPlace, setSelectedPlace] = useState<PlaceItemData | null>(null);

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
      <div className="mx-[52px] flex flex-col items-end gap-2 px-2.5">
        <p className="rotate-z-3 cursor-default text-xs text-(--gray)">Нажмите на карточку...</p>
        <img className="h-20" src={chooseIcon} alt="Choose Card" />
      </div>

      <Grid
        gridClass="places__grid"
        data={data}
        renderItem={(item) => (
          <PlaceCard click={() => handleCardClick(item)} title={item.title} image={item.image} />
        )}
      />

      {/* Overlay */}
      {selectedPlace && (
        <div
          data-testid="overlay"
          className="fixed inset-0 z-[1002] flex items-center justify-center bg-[#000000b4] pt-12"
          onClick={closeOverlay}
        >
          <div
            className="relative mx-2.5 flex h-[80vh] w-full flex-col overflow-hidden rounded-xl bg-slate-900 md:mx-0 md:w-3/5 lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <LazyMediaWithSkeleton
              type="video"
              height="100%"
              className="w-full object-contain shadow-xl lg:w-2/5"
              src={`${import.meta.env.BASE_URL}${selectedPlace.video}`}
            />
            <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-6 text-white lg:w-3/5">
              <h2 className="border-b border-gray-800 pb-2 text-base font-semibold">
                {selectedPlace.title}
              </h2>
              {selectedPlace.desc && (
                <p className="text-sm/relaxed text-slate-400">{selectedPlace.desc}</p>
              )}
              {selectedPlace.author && (
                <p className="text-right text-sm/relaxed text-slate-700 underline">
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
