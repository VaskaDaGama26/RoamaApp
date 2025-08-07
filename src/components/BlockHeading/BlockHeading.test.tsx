import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlockHeading from './BlockHeading';

describe('BlockHeading', () => {
  it('renders correctly', () => {
    render(<BlockHeading label="Label" image="Image" />);

    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByAltText('Image')).toBeInTheDocument();
  });
});
