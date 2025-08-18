import Grid from './Grid';
import '../../index.css';
import '../../colors.css';
import { motion } from 'motion/react';

export default {
  title: 'components/Grid',
  component: Grid,
  tags: ['autodocs'],
};

const style: React.CSSProperties = {
  padding: '10px',
  margin: '5px',
  border: '1px solid gray',
  borderRadius: '8px',
  textAlign: 'center',
  background: '#f0f0f0',
};

export const StringGrid = () => {
  const data = ['First Card', 'Second Card', 'Third Card', 'Fourth Card'];
  return (
    <Grid
      data={data}
      renderItem={(item) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={style}
        >
          {item}
        </motion.div>
      )}
      gridClass="grid grid-cols-3 gap-4"
    />
  );
};

export const CustomTypeGrid = () => {
  interface User {
    name: string;
    age: number;
  }

  const users: User[] = [
    { name: 'Andrey', age: 78 },
    { name: 'Anatoliy', age: 12 },
    { name: 'Victor', age: 32 },
    { name: 'Anthony', age: 43 },
  ];

  return (
    <Grid
      data={users}
      renderItem={(user) => (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={style}
        >
          {user.name} – {user.age}
        </motion.div>
      )}
      gridClass="grid grid-cols-3 gap-4"
    />
  );
};
