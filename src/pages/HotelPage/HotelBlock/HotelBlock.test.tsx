import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HotelBlock from './HotelBlock';
import type { HotelCardType } from '../types';

vi.mock('../HotelCard/HotelCard', () => ({
  default: ({
    item,
    isActive,
    setActiveTitle,
  }: {
    item: HotelCardType;
    isActive: boolean;
    setActiveTitle: (title: string) => void;
  }) => (
    <div data-testid={`card-${item.title}`} onClick={() => setActiveTitle(item.title)}>
      <h3>{item.title}</h3>
      {isActive && <span data-testid="active-marker">[Active]</span>}
    </div>
  ),
}));

const mockData: HotelCardType[] = [
  {
    title: 'Hotel Test',
    desc: 'A beautiful hotel in the test city.',
    location: 'Testland',
    image: 'hotel.jpg',
    link: 'https://example.com',
  },
  {
    title: 'Hotel Test 2',
    desc: 'A beautiful hotel in the test city 2.',
    location: 'Testland 2',
    image: 'hotel2.jpg',
    link: 'https://example2.com',
  },
];

describe('HotelBlock', () => {
  it('renders instruction text and icon', () => {
    render(<HotelBlock data={mockData} />);

    expect(screen.getByText(/Нажмите на карточку/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Choose Card/i)).toBeInTheDocument();
  });

  it('renders hotel cards and handles activation on click', () => {
    render(<HotelBlock data={mockData} />);

    const firstCard = screen.getByTestId('card-Hotel Test');
    const secondCard = screen.getByTestId('card-Hotel Test 2');

    // Изначально активных карточек нет
    expect(screen.queryByTestId('active-marker')).not.toBeInTheDocument();

    // Кликаем по первой карточке
    fireEvent.click(firstCard);
    expect(screen.getByTestId('card-Hotel Test')).toHaveTextContent('[Active]');

    // Кликаем по второй карточке — теперь она активна
    fireEvent.click(secondCard);
    expect(screen.getByTestId('card-Hotel Test 2')).toHaveTextContent('[Active]');
  });
});
