import { useState } from 'react';
import { motion } from 'motion/react';

const AnimatedTitle = ({ title, testId }: { title: string; testId: string | undefined }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative inline-block overflow-hidden h-fit sm:h-[60px]"
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
        className="block text-2xl leading-6 sm:text-5xl sm:leading-14 font-semibold cursor-default"
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
        className="block text-2xl leading-6 sm:text-5xl sm:leading-14 font-semibold absolute top-0 left-0 cursor-default"
      >
        {title}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedTitle;
