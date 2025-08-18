// CSF3
import HeroSection from './HeroSection';
import '../../index.css';
import '../../colors.css';

export default {
  title: 'components/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    heading: 'Текст заголовка',
    description: 'Описание обычно длинее и занимает от семи до двадцати слов, по ситуации',
  },
  parameters: {},
};

export const EmojiHeading = {
  args: {
    heading: '🙈 Текст заголовка 🙈',
    description: 'Описание обычно длинее и занимает от семи до двадцати слов, по ситуации',
  },
  parameters: {},
};

export const LongDescription = {
  args: {
    heading: 'Текст заголовка',
    description:
      'Описание обычно длинее и занимает от семи до двадцати слов, по ситуации. Иногда и гораздо длинее, лучше, конечно, не допускать, но разное бывает, это предусмотрено, но уже не так красиво',
  },
  parameters: {},
};

export const EmptyDescription = {
  args: {
    heading: 'Текст заголовка',
    description: '',
  },
  parameters: {},
};

export const WithTestId = {
  args: {
    heading: 'Текст заголовка',
    description: 'Описание обычно длинее и занимает от семи до двадцати слов, по ситуации',
    testId: 'test-heroId',
  },
  parameters: {},
};
