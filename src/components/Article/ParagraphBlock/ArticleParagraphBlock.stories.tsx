import ArticleParagraphBlock from './ArticleParagraphBlock';
import '../../../index.css';
import '../../../index.css';

export default {
  title: 'Components/Article/ArticleParagraphBlock',
  component: ArticleParagraphBlock,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    paragraphs: [
      'Первый абзац статьи. Здесь может быть введение или основная мысль.',
      'Второй абзац раскрывает тему подробнее и добавляет контекст.',
      'Третий абзац завершает блок информации, делая выводы.',
    ],
  },
};

export const SingleParagraph = {
  args: {
    paragraphs: ['Один короткий абзац для проверки работы компонента с минимальными данными.'],
  },
};

export const ManyParagraphs = {
  args: {
    paragraphs: Array.from(
      { length: 6 },
      (_, i) => `Абзац №${i + 1} с текстом для тестирования анимации.`
    ),
  },
};
