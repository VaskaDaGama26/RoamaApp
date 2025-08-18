import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ArticleParagraphBlock from './ArticleParagraphBlock';

describe('ArticleParagraphBlock', () => {
  const paragraphs = ['Первый абзац текста.', 'Второй абзац текста.', 'Третий абзац текста.'];

  it('renders all paragraphs', () => {
    render(<ArticleParagraphBlock paragraphs={paragraphs} />);

    const pElements = screen.getAllByText(/./);

    expect(pElements).toHaveLength(paragraphs.length);

    paragraphs.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('assigns the required classes to the first paragraph', () => {
    render(<ArticleParagraphBlock paragraphs={[paragraphs[0]]} />);
    const p = screen.getByText(paragraphs[0]);
    expect(p).toHaveClass('text-sm/relaxed', 'lg:text-base/relaxed', 'text-justify', 'indent-4');
  });
});
