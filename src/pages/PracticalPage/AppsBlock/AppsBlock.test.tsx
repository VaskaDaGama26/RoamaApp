import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import AppsBlock from './AppsBlock';

const fakeData = [
  {
    title: 'App 1',
    desc: 'The best app.',
    icon: 'icon1.svg',

    googleLink: 'https://google-link.example/id-1',
    appleLink: 'https://apple-link.example/id-2',
  },
  {
    title: 'App 2',
    desc: 'The worst app.',
    icon: 'icon2.svg',

    googleLink: 'https://google-link.example/id-2',
    appleLink: 'https://apple-link.example/id-2',
  },
];

describe('AppsBlock', () => {
  it('renders app titles, descriptions and icons', () => {
    render(<AppsBlock data={fakeData} />);

    fakeData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.desc)).toBeInTheDocument();

      const image = screen.getByAltText(item.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', `/${item.icon}`);
    });
  });
});
