import React from 'react';
import './Grid.css';
import type { GridProps } from './types';
import GridItem from './GridItem';

const Grid: React.FC<GridProps> = ({ data }) => {
  return (
    <div id="grid" className="grid">
      {data.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Grid;
