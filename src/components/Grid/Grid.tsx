import React from 'react';
import './Grid.css';

interface GridProps<T> {
  gridClass: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Grid = <T,>({ gridClass, data, renderItem }: GridProps<T>) => {
  return (
    <div className={gridClass}>
      {data.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
