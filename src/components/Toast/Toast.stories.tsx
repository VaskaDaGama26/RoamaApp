// CSF2
import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';
import { useState } from 'react';
import '../../index.css';

const meta: Meta<typeof Toast> = {
  title: 'components/Toast',
  component: Toast,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: { message: 'This is a Toast!', onClose: () => {} },
};

export const WithControl = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button
        style={{
          marginBottom: '20px',
          padding: '10px 15px',
          background: '#6b46c1',
          color: '#fff',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => setVisible(true)}
      >
        Показать тост
      </button>
      {visible && <Toast message="Привет из Storybook 👋" onClose={() => setVisible(false)} />}
    </>
  );
};
