import { render, screen } from '@testing-library/react';
import MarqueeComp from './MarqueeComp';
import { vi } from 'vitest';

vi.mock('react-fast-marquee', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-marquee">{children}</div>
  ),
}));

describe('MarqueeComp', () => {
  it('renders all MarqueeLabel items', () => {
    render(<MarqueeComp />);

    expect(screen.getByTestId('mock-marquee')).toBeInTheDocument();

    expect(screen.getByText(/меньше вещей/i)).toBeInTheDocument();
    expect(screen.getByText(/открой мир/i)).toBeInTheDocument();
    expect(screen.getByText(/путешествуй легко/i)).toBeInTheDocument();
  });
});
