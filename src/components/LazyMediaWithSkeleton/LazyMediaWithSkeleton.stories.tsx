import LazyMediaWithSkeleton from './LazyMediaWithSkeleton';
import '../../colors.css';
import '../../index.css';

export default {
  title: 'components/LazyMediaWithSkeleton',
  component: LazyMediaWithSkeleton,
  tags: ['autodocs'],
};

export const Image = {
  args: {
    type: 'image',
    src: 'https://picsum.photos/800/400',
    alt: 'Пример изображения',
    height: '240px',
    className: 'rounded-md',
  },
};

export const Video = {
  args: {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://picsum.photos/800/400',
    height: '320px',
    className: 'rounded-md',
  },
};

export const SmallImage = {
  args: {
    type: 'image',
    src: 'https://picsum.photos/400/200',
    alt: 'Маленькое изображение',
    height: '150px',
    className: 'rounded-lg',
  },
};
