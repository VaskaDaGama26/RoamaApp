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

describe('ChecklistBlock', () => {
  it('renders app titles and descriptions', () => {
    render(<AppsBlock data={fakeData} />);

    // Заголовки категорий
    expect(screen.getByText('App 1')).toBeInTheDocument();
    expect(screen.getByText('App 2')).toBeInTheDocument();

    // Содержимое категорий
    expect(screen.getByText('The best app.')).toBeInTheDocument();
    expect(screen.getByText('The worst app.')).toBeInTheDocument();

    // Изображение приложения
    const image = screen.getByAltText('App 1');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/icon1.svg');
    const image2 = screen.getByAltText('App 2');
    expect(image2).toBeInTheDocument();
    expect(image2).toHaveAttribute('src', '/icon2.svg');
  });
});
