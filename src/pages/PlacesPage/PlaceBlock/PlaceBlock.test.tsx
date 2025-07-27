import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, beforeAll } from 'vitest';
import PlaceBlock from './PlaceBlock';

// IntersectionObserver Mock
beforeAll(() => {
  class IntersectionObserverMock {
    callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }

    observe = (element: Element) => {
      this.callback(
        [{ isIntersecting: true, target: element } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver
      );
    };

    unobserve = () => {};
    disconnect = () => {};
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserverMock,
  });
});

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

    // Ищем картинку по alt
    const placeImage = screen.getByAltText(data[0].title);
    expect(placeImage).toBeInTheDocument();

    // Кликаем на карточку (родитель картинки)
    fireEvent.click(placeImage.closest('article')!);

    // Проверяем, что появился оверлей с заголовком
    expect(screen.getByText(data[0].title)).toBeInTheDocument();

    // Кликаем по оверлею чтобы закрыть
    fireEvent.click(screen.getByTestId('overlay'));

    // Проверяем, что оверлея больше нет
    expect(screen.queryByText(data[0].title)).not.toBeInTheDocument();
  });
});
