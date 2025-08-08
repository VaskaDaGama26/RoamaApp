import React from 'react';
import './Grid.css';
import { motion } from 'motion/react';

interface GridProps<T> {
  id?: string;
  gridClass?: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Grid = <T,>({ id, gridClass, data, renderItem }: GridProps<T>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      id={id}
      data-testid="test-grid"
      className={gridClass}
    >
      {data.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </motion.div>
  );
};

export default Grid;
