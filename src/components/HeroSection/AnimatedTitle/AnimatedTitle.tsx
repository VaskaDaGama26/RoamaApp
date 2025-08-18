import { useState } from 'react';
import { motion } from 'motion/react';

const AnimatedTitle = ({ title, testId }: { title: string; testId: string | undefined }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative inline-block h-[28px] overflow-hidden sm:h-[60px]"
    >
      <motion.h1
        animate={{ y: isHovered ? '-100%' : '0%' }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 1,
          velocity: 2,
        }}
        data-testid={`hero-heading-${testId}`}
        className="block cursor-default text-2xl leading-6 font-semibold sm:text-5xl sm:leading-14"
      >
        {title}
      </motion.h1>

      <motion.span
        initial={{ y: '100%', opacity: 0 }}
        animate={{
          y: isHovered ? '0%' : '100%',
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 1,
          velocity: 2,
        }}
        className="absolute top-0 left-0 block cursor-default text-2xl leading-6 font-semibold sm:text-5xl sm:leading-14"
      >
        {title}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedTitle;
