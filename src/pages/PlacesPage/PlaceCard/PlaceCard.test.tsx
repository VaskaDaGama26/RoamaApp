import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import PlaceCard from './PlaceCard';

describe('PlaceCard', () => {
  it('renders articles with working click handler', () => {
    const handleClick = vi.fn();

    render(<PlaceCard click={handleClick} title="Heading Test" image='test/path.png' />);
 
    // Ищем article и кликаем по нему
    const article = screen.getByRole('article');
    fireEvent.click(article);

    // Проверяем, что обработчик клика вызван
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
