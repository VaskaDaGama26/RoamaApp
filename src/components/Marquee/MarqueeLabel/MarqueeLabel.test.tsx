import { render, screen } from '@testing-library/react';
import MarqueeLabel from './MarqueeLabel';

const car = 'icon';

describe('MarqueeLabel', () => {
  it('renders correctly', () => {
    render(<MarqueeLabel label="Label" icon={car} />);

    expect(screen.getByText('Label')).toBeInTheDocument();

    expect(screen.getByAltText('Icon Left')).toBeInTheDocument();
    expect(screen.getByAltText('Icon Right')).toBeInTheDocument();
  });
});
