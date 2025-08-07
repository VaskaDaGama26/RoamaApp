import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineItem from './TimelineItem';

const mockData = {
  era: 'Эра',
  title: 'Заголовок',
  image: 'test-1.jpg',
  gallery: ['test-2.jpg', 'trst-3.jpg'],
  year: '2025',
  description: 'Описание',
  howToGetThere: 'Путь',
  price: '€10',
  link: 'https://example.com/',
};

describe('TimelineItem', () => {
  it('renders correct data', () => {
    render(<TimelineItem item={mockData} />);

    expect(screen.getByText('Эра')).toBeInTheDocument();
    expect(screen.getByText('Заголовок')).toBeInTheDocument();

    expect(screen.getByText('Описание')).toBeInTheDocument();
    expect(screen.getByText('Путь')).toBeInTheDocument();
    expect(screen.getByText('€10')).toBeInTheDocument();
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});
