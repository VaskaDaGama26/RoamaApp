import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DishCard from './DishCard';
import type { DishItemData } from '../types';

const mockData: DishItemData = {
  title: 'Заголовок',
  position: [43.3213, -1.9857],
  link: 'https://example.com/',
  image: 'https://example.com/img-1.jpg',
  desc: 'Описание',
};

describe('DishCard', () => {
  it('renders correct data', () => {
    render(<DishCard item={mockData} />);

    expect(screen.getByText('Заголовок')).toBeInTheDocument();
    expect(screen.getByText('Описание')).toBeInTheDocument();
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});
