import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ArticleDetails from './ArticleDetails';

describe('ArticleDetails', () => {
  it('renders place and time with correct icons', () => {
    render(<ArticleDetails place="Москва" time="2023-08-07" />);

    const placeElement = screen.getByText('Москва');
    expect(placeElement).toBeInTheDocument();

    const placeIcon = screen.getByAltText('Место проведения');
    expect(placeIcon).toBeInTheDocument();

    expect(placeIcon.parentElement).toContainElement(placeElement);

    const timeElement = screen.getByText('2023-08-07');
    expect(timeElement).toBeInTheDocument();

    const timeIcon = screen.getByAltText('Время проведения');
    expect(timeIcon).toBeInTheDocument();

    expect(timeIcon.parentElement).toContainElement(timeElement);
  });

  it('does not render place and time if they are not passed', () => {
    render(<ArticleDetails place={undefined} time={undefined} />);
    
    expect(screen.queryByText('Москва')).toBeNull();
    expect(screen.queryByText('2023-08-07')).toBeNull();

    expect(screen.queryByText(/./)).toBeNull();
  });

  it('renders link "Подробнее" with correct href and attributes', () => {
    const url = 'https://example.com';
    render(<ArticleDetails place="Город" time="Дата" link={url} />);

    const link = screen.getByRole('link', { name: /Подробнее/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    const linkIcon = screen.getByAltText('Подробнее');
    expect(linkIcon).toBeInTheDocument();

    expect(link).toContainElement(linkIcon);
  });

  it('does not render link if link prop is not passed', () => {
    render(<ArticleDetails place="Город" time="Дата" />);
    expect(screen.queryByRole('link')).toBeNull();
  });
});
