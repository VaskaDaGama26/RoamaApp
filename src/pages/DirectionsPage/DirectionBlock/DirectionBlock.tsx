import AccordionBlock from '../../../components/AccordionBlock/AccordionBlock';
import BlockHeading from '../../../components/BlockHeading';
import DirectionRouteMap from '../DirectionRouteMap/DirectionRouteMap';
import directionData from '../directionsData.json';
import type { DirectionItemType } from '../types';
import hintIcon from '/directions/icons/lightbulb.svg';
import pathIcon from '/directions/icons/path.svg';

const DirectionBlock = () => {
  const data = directionData as DirectionItemType[];

  return (
    <div className="flex flex-col gap-16 lg:pt-16 px-2.5 lg:px-0">
      {data.map((item, index) => (
        <div className="flex flex-col gap-8" key={index}>
          <BlockHeading label={item.label} />
          <DirectionRouteMap routeCoordinates={item.coordinates} />
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between">
            <p className="text-gray-500 flex flex-row gap-1 items-center text-sm lg:text-base">
              <img className="h-6" src={hintIcon} alt="" />
              {item.hint}
            </p>
            <p className="text-gray-500 flex flex-row gap-1 items-center text-sm lg:text-base">
              <img className="h-6" src={pathIcon} alt="" />
              {item.transport}
            </p>
          </div>
          <AccordionBlock data={item.path} />
        </div>
      ))}
    </div>
  );
};

export default DirectionBlock;
