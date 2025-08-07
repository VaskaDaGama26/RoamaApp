import { render, screen } from '@testing-library/react';
import LazyMediaWithSkeleton from './LazyMediaWithSkeleton';

describe('LazyMediaWithSkeleton', () => {
  it('renders image with skeleton and shows it when in view', async () => {
    render(
      <LazyMediaWithSkeleton
        type="image"
        src="/test.jpg"
        alt="Test image"
        height="300px"
        className="test-class"
      />
    );

    const img = await screen.findByAltText('Test image');
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveClass('test-class');
  });

  it('renders video with skeleton and shows it when in view', async () => {
    render(
      <LazyMediaWithSkeleton
        data-testid="lazy-video"
        type="video"
        src="/test.mp4"
        poster="/poster.jpg"
        height="300px"
        className="video-class"
      />
    );

    const video = await screen.getByTestId('lazy-video');
    expect(video).toHaveAttribute('src', '/test.mp4');
    expect(video).toHaveAttribute('poster', '/poster.jpg');
    expect(video).toHaveClass('video-class');
  });
});
