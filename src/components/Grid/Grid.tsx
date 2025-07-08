import React from 'react';
import './Grid.css';

interface GridProps<T> {
  id?: string;
  gridClass?: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Grid = <T,>({ id, gridClass, data, renderItem }: GridProps<T>) => {
  return (
    <div id={id} className={gridClass}>
      {data.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
