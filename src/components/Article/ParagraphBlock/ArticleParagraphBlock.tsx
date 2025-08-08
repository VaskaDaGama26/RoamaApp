import { motion, type Variants } from 'framer-motion';

const ArticleParagraphBlock = ({ paragraphs }: { paragraphs: string[] }) => {

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, filter: 'blur(2px)', y: 20 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          variants={paragraphVariants}
          className="text-sm/relaxed lg:text-base/relaxed text-justify indent-4"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default ArticleParagraphBlock;
