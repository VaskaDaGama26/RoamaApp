import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterButtons from './FilterButtons';

describe('FilterButtons', () => {
  const continents = ['Азия', 'Европа', 'Америка'];

  it('renders all buttons including "Все"', () => {
    render(<FilterButtons continents={continents} activeContinent={null} onSelect={() => {}} />);

    expect(screen.getByText('Все')).toBeInTheDocument();

    continents.forEach((continent) => {
      expect(screen.getByText(continent)).toBeInTheDocument();
    });
  });

  it('highlights active continent button', () => {
    render(<FilterButtons continents={continents} activeContinent="Европа" onSelect={() => {}} />);

    const activeButton = screen.getByText('Европа');
    expect(activeButton).toHaveClass('bg-(--purple)');
    expect(activeButton).toHaveClass('text-white');

    const inactiveButton = screen.getByText('Азия');
    expect(inactiveButton).not.toHaveClass('bg-(--purple)');
  });

  it('calls onSelect with null when clicking "Все"', () => {
    const onSelect = vi.fn();
    render(<FilterButtons continents={continents} activeContinent="Азия" onSelect={onSelect} />);

    fireEvent.click(screen.getByText('Все'));
    expect(onSelect).toHaveBeenCalledWith(null);
  });

  it('calls onSelect with continent name when clicking continent button', () => {
    const onSelect = vi.fn();
    render(<FilterButtons continents={continents} activeContinent={null} onSelect={onSelect} />);

    fireEvent.click(screen.getByText('Азия'));
    expect(onSelect).toHaveBeenCalledWith('Азия');
  });

  it('toggles active continent off if clicked again', () => {
    const onSelect = vi.fn();
    render(<FilterButtons continents={continents} activeContinent="Америка" onSelect={onSelect} />);

    fireEvent.click(screen.getByText('Америка'));
    expect(onSelect).toHaveBeenCalledWith(null);
  });
});
