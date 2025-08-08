import BlockHeading from '../../../components/BlockHeading/BlockHeading';
import './ChecklistBlock.css';
import type { ChecklistData } from '../types';
import explorer from '/static/icons/practical/explorer.svg';
import { motion, type Variants } from 'motion/react';

const ChecklistBlock = ({ data }: { data: ChecklistData }) => {
  const listVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemsVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

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
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={listVariants}
              viewport={{ once: true, amount: 0.2 }}
              className="text-(--gray) pt-2 pb-4 ps-4 list-decimal text-sm/loose sm:text-base/normal"
            >
              {items.map((item: { label: string }, subIndex: number) => (
                <motion.li variants={itemsVariants} key={subIndex} className="ps-1">
                  {item.label}
                </motion.li>
              ))}
            </motion.ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistBlock;
