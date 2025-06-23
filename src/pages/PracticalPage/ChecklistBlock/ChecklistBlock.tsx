import BlockHeading from '../../../components/BlockHeading';
import './ChecklistBlock.css';
import type { ChecklistData } from '../types';
import explorer from '/icons/practical/explorer.svg';

const ChecklistBlock = ({ data }: { data: ChecklistData }) => {
  return (
    <div className="flex items-center flex-col mt-16 gap-9 px-5 lg:px-0">
      <BlockHeading
        label="Что не забыть взять в путешествие?"
        image={explorer}
        imageClasses="top-18 lg:top-0 right-0 sm:right-14 h-14"
      />
      <ul className="list">
        {Object.entries(data).map(([category, items], index) => (
          <li key={index} className="list__item">
            <h3 className="text-base/tight sm:text-lg/tight">{category}</h3>
            <ul className="text-(--gray) pt-2 pb-4 ps-4 list-decimal text-sm/loose sm:text-base/normal">
              {items.map((item: { label: string }, subIndex: number) => (
                <li key={subIndex} className="ps-1">
                  {item.label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistBlock;
