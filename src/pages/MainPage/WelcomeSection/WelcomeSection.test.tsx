import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import WelcomeSection from './WelcomeSection';

describe('WelcomeSection', () => {
  it('renders correctly', () => {
    render(<WelcomeSection />);
    expect(
      screen.getByText('Твоё приключение начинается здесь — среди дорог, ветра и горизонтов')
    ).toBeInTheDocument();
    expect(screen.getByTestId('world-img')).toBeInTheDocument();
    expect(screen.getByTestId('traveller-img')).toBeInTheDocument();
  });
});
