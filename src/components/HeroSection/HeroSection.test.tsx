import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders correctly', () => {
    render(<HeroSection heading="Heading" description="Description" />);

    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
