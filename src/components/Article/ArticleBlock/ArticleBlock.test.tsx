import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ArticleBlock from './ArticleBlock';
import type { ArticleItemType } from '../types';

vi.mock('../ArticleItem/ArticleItem', () => {
  return {
    default: ({ item }: { item: ArticleItemType }) => {
      return <div data-testid="article-item">{item.title}</div>;
    },
  };
});

describe('ArticleBlock', () => {
  const mockData: ArticleItemType[] = [
    {
      title: 'Title 1',
      imageGallery: ['article/test/example11.jpg', 'article/test/example12.jpg'],
      textParagraphs: [
        'Paragraph 11',
        'Paragraph 12',
        'Paragraph 13',
      ],
      link: 'https://www.example1.com/',
    },
    {
      title: 'Title 2',
      imageGallery: ['article/test/example21.jpg', 'article/test/example22.jpg'],
      textParagraphs: [
        'Paragraph 21',
        'Paragraph 22',
      ],

      link: 'https://www.example2.com/',
    },
  ];

  it('renders correct number of ArticleItem components', () => {
    render(<ArticleBlock data={mockData} />);

    const items = screen.getAllByTestId('article-item');
    expect(items.length).toBe(mockData.length);

    expect(items[0]).toHaveTextContent(mockData[0].title);
    expect(items[1]).toHaveTextContent(mockData[1].title);
  });

  it('renders empty when data is empty', () => {
    render(<ArticleBlock data={[]} />);
    expect(screen.queryByTestId('article-item')).toBeNull();
  });
});
