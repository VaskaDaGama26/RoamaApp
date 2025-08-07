import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WorldMap from './WorldMap';
import type { DishItemData } from '../types';

vi.mock('react-leaflet', async () => {
  const actual = await vi.importActual('react-leaflet');
  return {
    ...actual,
    MapContainer: ({ children }: any) => <div data-testid="map">{children}</div>,
    TileLayer: () => <div data-testid="tile-layer" />,
    Marker: ({ children }: any) => <div data-testid="marker">{children}</div>,
    Popup: ({ children }: any) => <div data-testid="popup">{children}</div>,
  };
});

const mockData: DishItemData[] = [
  {
    title: 'Пинчос',
    position: [43.3213, -1.9857],
    link: 'https://ru.wikipedia.org/wiki/Пинчо_(блюдо)',
    image: 'https://example.com/pinchos.jpg',
    desc: 'Вкусная закуска.',
  },
  {
    title: 'Лакса',
    position: [3.139, 101.6869],
    link: 'https://ru.wikipedia.org/wiki/Лакса',
    image: 'https://example.com/laksa.jpg',
    desc: 'Малайзийский суп.',
  },
];

describe('WorldMap', () => {
  it('renders map container and all markers with popups', () => {
    render(<WorldMap data={mockData} />);

    expect(screen.getByTestId('map')).toBeInTheDocument();

    const markers = screen.getAllByTestId('marker');
    expect(markers.length).toBe(mockData.length);

    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
