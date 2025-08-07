import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ArticleItem from './ArticleItem';

const mockItem = {
  title: 'Заголовок статьи',
  textParagraphs: ['Первый абзац.', 'Второй абзац.', 'Третий абзац.', 'Четвертый абзац.'],
  video: 'video.mp4',
  imageGallery: ['image1.jpg', 'image2.jpg'],
  place: 'Москва',
  time: '2023-08-07',
  link: 'https://example.com',
};

describe('ArticleItem', () => {
  it('renders correctly all parts of article', () => {
    render(<ArticleItem item={mockItem} />);

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();

    expect(screen.getByText(mockItem.textParagraphs[0])).toBeInTheDocument();
    expect(screen.getByText(mockItem.textParagraphs[1])).toBeInTheDocument();

    expect(screen.getByText(mockItem.textParagraphs[2])).toBeInTheDocument();
    expect(screen.getByText(mockItem.textParagraphs[3])).toBeInTheDocument();

    const video = screen.getByRole('video');
    expect(video).toHaveAttribute('src', expect.stringContaining(mockItem.video));

    const gallery = screen.getByTestId('gallery');
    const images = within(gallery).getAllByRole('img');
    expect(images.length).toBe(mockItem.imageGallery.length);
    mockItem.imageGallery.forEach((image, i) => {
      expect(images[i]).toHaveAttribute('src', expect.stringContaining(image));
      expect(images[i]).toHaveAttribute('alt', mockItem.title);
    });

    expect(screen.getByText(mockItem.place)).toBeInTheDocument();
    expect(screen.getByText(mockItem.time)).toBeInTheDocument();
  });
});
