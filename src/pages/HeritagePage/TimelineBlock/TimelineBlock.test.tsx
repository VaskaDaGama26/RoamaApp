import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineBlock from './TimelineBlock';
import type { TimelineItemType } from '../types';

const mockData: TimelineItemType[] = [
  {
    era: 'Эра 1',
    title: 'Заголовок 1',
    image: 'test-11.jpg',
    gallery: ['test-21.jpg', 'trst-31.jpg'],
    year: '2025',
    description: 'Описание',
    howToGetThere: 'Путь',
    price: '€11',
    link: 'https://example.com/1',
  },
  {
    era: 'Эра 2',
    title: 'Заголовок 2',
    image: 'test-12.jpg',
    gallery: ['test-22.jpg', 'trst-32.jpg'],
    year: '2024',
    description: 'Описание 2',
    howToGetThere: 'Путь 2',
    price: '€12',
    link: 'https://example.com/2',
  },
];

describe('TimelineBlock', () => {
  it('renders items correctly', () => {
    render(<TimelineBlock data={mockData} />);
    expect(screen.getByAltText('Luggage Icon')).toBeInTheDocument();

    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });
});
