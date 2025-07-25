import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import HotelCard from './HotelCard';

const fakeHotel = {
  title: 'Hotel Test',
  desc: 'A beautiful hotel in the test city.',
  location: 'Testland',
  image: 'hotel.jpg',
  link: 'https://example.com',
};
const mockSetActiveTitle = vi.fn();

describe('HotelCard', () => {
  it('renders title and location', () => {
    render(<HotelCard item={fakeHotel} isActive={false} setActiveTitle={mockSetActiveTitle} />);
    expect(screen.getByText('Hotel Test')).toBeInTheDocument();
    expect(screen.getByText('Testland')).toBeInTheDocument();
  });
  it('renders desc', () => {
    render(<HotelCard item={fakeHotel} isActive={true} setActiveTitle={mockSetActiveTitle} />);
    expect(screen.getByText('A beautiful hotel in the test city.')).toBeInTheDocument();
  });
});
