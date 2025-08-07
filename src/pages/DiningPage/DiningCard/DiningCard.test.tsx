import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DiningCard from './DiningCard';
import type { DiningPlace } from '../types';

const mockData: DiningPlace[] = [
  {
    title: 'Floridita',
    city: 'Гавана, Куба',
    desc: 'Родина даикири и любимое место Эрнеста Хемингуэя',
    continent: 'Северная Америка',
    bill: '7',
    link: 'https://en.wikipedia.org/wiki/Floridita',
  },
  {
    title: 'Old Absinthe House',
    city: 'Новый Орлеан, США',
    desc: 'Уникальный бар с атмосферой XIX века, любили Марк Твен и Оскар Уайльд',
    continent: 'Северная Америка',
    bill: '12',
    link: 'https://en.wikipedia.org/wiki/Old_Absinthe_House',
  },
];

describe('DiningCard', () => {
  it('renders items correctly', () => {
    render(
      <>
        {mockData.map((place) => (
          <DiningCard item={place} />
        ))}
      </>
    );

    mockData.forEach((place) => {
      expect(screen.getByText(place.title)).toBeInTheDocument();
      expect(screen.getByText(place.city)).toBeInTheDocument();
      expect(screen.getByText(place.desc)).toBeInTheDocument();
      expect(screen.getByTestId(`dining-link-${place.title}`)).toHaveAttribute('href', place.link);
    });
  });
});
