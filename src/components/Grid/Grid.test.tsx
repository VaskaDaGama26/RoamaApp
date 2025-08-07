import { render, screen } from '@testing-library/react';
import Grid from './Grid';
import { describe, it, expect } from 'vitest';

describe('Grid component', () => {
  const data = ['apple', 'banana', 'cherry'];

  it('renders all items via renderItem', () => {
    render(<Grid data={data} renderItem={(item) => <div data-testid="fruit">{item}</div>} />);

    const items = screen.getAllByTestId('fruit');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('apple');
    expect(items[1]).toHaveTextContent('banana');
    expect(items[2]).toHaveTextContent('cherry');
  });

  it('applies id and className', () => {
    render(
      <Grid
        id="grid"
        gridClass="grid-cols-3"
        data={data}
        renderItem={(item) => <div>{item}</div>}
      />
    );

    const grid = screen.getByTestId('test-grid');
    expect(grid).toHaveAttribute('id', 'grid');
    expect(grid).toHaveClass('grid-cols-3');
  });
});
