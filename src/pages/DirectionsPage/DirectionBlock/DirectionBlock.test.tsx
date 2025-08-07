import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DirectionBlock from './DirectionBlock';
import type { DirectionItemType } from '../types';

const mockData: DirectionItemType[] = [
  {
    label: 'Вена | Зальцбург | Гальштат',
    hint: '3 дня в сердце Австрии',
    transport: 'Поезд, ≈ 350 км',
    path: [
      {
        title: 'День 1 — Вена: прибытие, прогулка по Рингу',
        text: 'Приезжаем в Вену, заселяемся и отправляемся на кольцевую прогулку по Рингштрассе — архитектурное великолепие, уютные кофейни, Опера и Хофбург.',
      },
      {
        title: 'День 2 — Зальцбург: старый город и дом Моцарта',
        text: 'Ранний поезд в Зальцбург (2,5 ч). Бродим по старому городу, поднимаемся на крепость Хоэнзальцбург, пьем кофе с видом на Альпы.',
      },
      {
        title: 'День 3 — Гальштат: озеро, штиль и смотровая площадка',
        text: 'Переезд в Гальштат — сказочный городок на озере. Пешая прогулка, лодки, и панорамная точка Skywalk, которая захватывает дух.',
      },
    ],
    coordinates: [
      [48.210033, 16.363449],
      [47.80949, 13.05501],
      [47.56154, 13.64838],
    ],
    coordinatesDots: ['Вена', 'Зальцбург', 'Гальштат'],
  },
  {
    label: 'Берлин | Копенгаген | Хельсинки',
    hint: 'Северная одиссея за выходные',
    transport: 'Самолёт, ≈ 2 600 км',
    path: [
      {
        title: 'День 1 — Берлин: история и контраст',
        text: 'Начни утро в Митте с музеев на Музейном острове, затем к Бранденбургским воротам и East Side Gallery. Вечером перелёт в Копенгаген (~1 ч).',
      },
      {
        title: 'День 2 — Копенгаген: хюгге и модерн',
        text: 'Прокатись на велике по набережной Нюхавн, загляни в Христианию и попробуй smørrebrød. Во второй половине дня — перелёт в Хельсинки (~1.5 ч).',
      },
      {
        title: 'День 3 — Хельсинки: северный модерн и сауна',
        text: 'Исследуй Сенатскую площадь, церковь в скале и пройди к порту. Заверши путешествие сауной и видом на Балтику.',
      },
    ],
    coordinates: [
      [52.52, 13.405],
      [55.6761, 12.5683],
      [60.1699, 24.9384],
    ],
    coordinatesDots: ['Берлин', 'Копенгаген', 'Хельсинки'],
  },
];

describe('DirectionBlock', () => {
  it('renders the correct number of direction blocks', () => {
    render(<DirectionBlock data={mockData} />);
    const items = screen.getAllByTestId('direction-item');
    expect(items).toHaveLength(mockData.length);
  });
  it('renders items correctly', () => {
    render(<DirectionBlock data={mockData} />);
    mockData.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument;
      expect(screen.getByText(item.hint)).toBeInTheDocument;
      expect(screen.getByText(item.transport)).toBeInTheDocument;
      item.path.forEach((path) => {
        expect(screen.getByText(path.title)).toBeInTheDocument;
        expect(screen.getByText(path.text)).toBeInTheDocument;
      });
    });
  });
});
