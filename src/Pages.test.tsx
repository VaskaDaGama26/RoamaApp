import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import DiningPage from './pages/DiningPage/DiningPage';
import DirectionsPage from './pages/DirectionsPage/DirectionsPage';
import FeedbackPage from './pages/FeedbackPage/FeedbackPage';
import FestivalsPage from './pages/FestivalsPage/FestivalsPage';
import FoodPage from './pages/FoodPage/FoodPage';
import HeritagePage from './pages/HeritagePage/HeritagePage';
import HotelPage from './pages/HotelPage/HotelPage';
import PlacesPage from './pages/PlacesPage/PlacesPage';
import PracticalPage from './pages/PracticalPage/PracticalPage';
import StoriesPage from './pages/StoriesPage/StoriesPage';

const pages = [
  { Component: DiningPage, testId: 'hero-heading-dining' },
  { Component: DirectionsPage, testId: 'hero-heading-directions' },
  { Component: FeedbackPage, testId: 'hero-heading-feedback' },
  { Component: FestivalsPage, testId: 'hero-heading-festivals' },
  { Component: FoodPage, testId: 'hero-heading-food' },
  { Component: HeritagePage, testId: 'hero-heading-heritage' },
  { Component: HotelPage, testId: 'hero-heading-hotel' },
  { Component: PlacesPage, testId: 'hero-heading-places' },
  { Component: PracticalPage, testId: 'hero-heading-practical' },
  { Component: StoriesPage, testId: 'hero-heading-stories' },
];

describe('', () => {
  pages.forEach(({ Component, testId }) => {
    it(`${Component.name} renders`, () => {
      render(<Component />);
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });
});
