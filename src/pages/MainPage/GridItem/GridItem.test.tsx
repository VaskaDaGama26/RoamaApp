import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GridItem from './GridItem';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const exampleItem1 = {
  id: 1,
  label: 'Вкусы мира',
  text: 'От Брискета до Суши — гастрономическое путешествие с картой происхождения каждого блюда',
  icon: '/RoamaApp/static/icons/grid/food.svg',
  bg: 'bg-neutral',
  pattern: 'bg-pattern-grid',
  link: 'food/',
};

const exampleItem2 = {
  id: 2,
  label: 'Места, где стоит остановиться',
  text: 'Необычные отели: ледяные, капсульные, подземные — с рейтингами и ценами',
  icon: '/RoamaApp/static/icons/grid/hotel.svg',
  bg: 'bg-neutral',
  pattern: 'bg-pattern-grid',
  link: 'hotel/',
};

describe('GridItem with example data', () => {
  it('renders first example item', () => {
    render(<GridItem item={exampleItem1} />, { wrapper: Wrapper });
    expect(screen.getByText('Вкусы мира')).toBeInTheDocument();
    expect(screen.getByText(/гастрономическое путешествие/)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/food/');
    expect(screen.getByAltText('icon')).toHaveAttribute('src', exampleItem1.icon);
  });

  it('renders second example item', () => {
    render(<GridItem item={exampleItem2} />, { wrapper: Wrapper });
    expect(screen.getByText('Места, где стоит остановиться')).toBeInTheDocument();
    expect(screen.getByText(/Необычные отели/)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/hotel/');
    expect(screen.getByAltText('icon')).toHaveAttribute('src', exampleItem2.icon);
  });
});
