import ArticleItem from './ArticleItem';
import type { ArticleItemType } from '../types';
import '../../../colors.css';
import '../../../index.css';

export default {
  title: 'Components/Article/ArticleItem',
  component: ArticleItem,
  tags: ['autodocs'],
};

const baseItem: ArticleItemType = {
  title: 'Заголовок статьи',
  textParagraphs: [
    'Первый абзац статьи. Он вводит читателя в тему.',
    'Второй абзац расширяет информацию.',
    'Третий абзац добавляет детали.',
    'Четвёртый абзац завершает мысль.',
  ],
  video: undefined,
  imageGallery: undefined,
  place: 'Москва, Красная площадь',
  time: '20 августа 2025, 18:00',
  link: 'https://example.com',
};

export const Default = {
  args: {
    item: baseItem,
  },
};

export const WithVideo = {
  args: {
    item: {
      ...baseItem,
      video: 'static/events/diaDeLosMuertos/diaDeLosMuertos.mp4',
    },
  },
};

export const WithGallery = {
  args: {
    item: {
      ...baseItem,
      imageGallery: [
        'static/events/diaDeLosMuertos/diaDeLosMuertos-1.jpg',
        'static/events/diaDeLosMuertos/diaDeLosMuertos-2.jpg',
      ],
    },
  },
};

export const TextOnly = {
  args: {
    item: {
      ...baseItem,
      place: undefined,
      time: undefined,
      link: undefined,
      video: undefined,
      imageGallery: undefined,
    },
  },
};
