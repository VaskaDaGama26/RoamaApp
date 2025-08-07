import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import PlaceBlock from './PlaceBlock';

const data = [
  {
    title: 'Заголовок',
    image: 'test/image.png',
    video: 'test/video.png',
    desc: 'Описание...',
    author: 'Author',
  },
];

describe('PlaceBlock', () => {
  it('renders images and handles overlay open/close', () => {
    render(<PlaceBlock data={data} />);

    const placeImage = screen.getByAltText(data[0].title);
    expect(placeImage).toBeInTheDocument();

    fireEvent.click(placeImage.closest('article')!);

    expect(screen.getByText(data[0].title)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('overlay'));

    expect(screen.queryByText(data[0].title)).not.toBeInTheDocument();
  });
});
