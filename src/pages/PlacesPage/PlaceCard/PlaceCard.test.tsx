import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import PlaceCard from './PlaceCard';

describe('PlaceCard', () => {
  it('renders articles with working click handler', () => {
    const handleClick = vi.fn();

    render(<PlaceCard click={handleClick} title="Heading Test" image='test/path.png' />);
 
    const article = screen.getByRole('article');
    fireEvent.click(article);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
