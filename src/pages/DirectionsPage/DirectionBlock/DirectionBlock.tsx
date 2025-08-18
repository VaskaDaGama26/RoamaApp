import AccordionBlock from '../../../components/AccordionBlock/AccordionBlock';
import BlockHeading from '../../../components/BlockHeading/BlockHeading';
import DirectionRouteMap from '../DirectionRouteMap/DirectionRouteMap';
import type { DirectionItemType } from '../types';
import hintIcon from '/static/directions/icons/lightbulb.svg';
import pathIcon from '/static/directions/icons/path.svg';

const DirectionBlock = ({ data }: { data: DirectionItemType[] }) => {
  return (
    <div className="flex flex-col gap-16 px-2.5 lg:px-0 lg:pt-16">
      {data.map((item, index) => (
        <div data-testid="direction-item" className="flex flex-col gap-8" key={index}>
          <BlockHeading label={item.label} />
          <DirectionRouteMap
            routeLabels={item.coordinatesDots}
            routeCoordinates={item.coordinates}
          />
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-0">
            <p className="flex flex-row items-center gap-1 text-sm text-gray-500 lg:text-base">
              <img className="h-6" src={hintIcon} alt="Hint Icon" />
              {item.hint}
            </p>
            <p className="flex flex-row items-center gap-1 text-sm text-gray-500 lg:text-base">
              <img className="h-6" src={pathIcon} alt="Transport Icon" />
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
