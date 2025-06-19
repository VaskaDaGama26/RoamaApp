import React from 'react';
import type { DishProps } from '../types';
import DishItem from './DishItem';

const DishGrid: React.FC<DishProps> = ({ data }) => {
  return (
    <div className="mt-10 max-w-[1020px] mx-auto">
      <div className="grid">
        {data.map((place, index) => (
          <DishItem key={index} item={place} />
        ))}
      </div>
    </div>
  );
};

export default DishGrid;
