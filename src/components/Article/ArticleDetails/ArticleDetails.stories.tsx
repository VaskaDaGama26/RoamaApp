import ArticleDetails from './ArticleDetails';
import '../../../index.css';
import '../../../colors.css';

export default {
  title: 'Components/Article/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
};

export const OnlyPlace = {
  args: {
    place: 'Москва, Красная площадь',
  },
};

export const OnlyTime = {
  args: {
    time: '25 августа 2025, 18:00',
  },
};

export const PlaceAndTime = {
  args: {
    place: 'Санкт-Петербург, Невский проспект',
    time: '1 сентября 2025, 12:00',
  },
};

export const WithLink = {
  args: {
    place: 'Онлайн',
    time: '10 сентября 2025, 20:00',
    link: 'https://example.com',
  },
};

export const OnlyLink = {
  args: {
    link: 'https://example.com',
  },
};
