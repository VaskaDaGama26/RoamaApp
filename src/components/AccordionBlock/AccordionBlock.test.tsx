import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AccordionBlock from './AccordionBlock';

describe('AccordionBlock', () => {
  const mockData = [
    { title: 'Заголовок 1', text: 'Текст 1' },
    { title: 'Заголовок 2', text: 'Текст 2' },
    { title: 'Заголовок 3', text: 'Текст 3' },
  ];

  it('renders correct number of items', () => {
    render(<AccordionBlock data={mockData} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(mockData.length);

    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('by default all items are closed', () => {
    render(<AccordionBlock data={mockData} />);
    mockData.forEach((_, index) => {
      const contentElement = screen.getByTestId(`accordion-content-${index}`);
      expect(contentElement).toHaveClass('opacity-0');
    });
  });

  it('opens and closes accordion items on click', () => {
    render(<AccordionBlock data={mockData} />);
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);
    const content0 = screen.getByTestId('accordion-content-0');
    expect(content0).toHaveClass('opacity-100');
    expect(buttons[0].textContent?.includes('−')).toBeTruthy();

    const content1 = screen.getByTestId('accordion-content-1');
    expect(content1).toHaveClass('opacity-0');

    fireEvent.click(buttons[1]);
    expect(content1).toHaveClass('opacity-100');
    expect(buttons[1].textContent?.includes('−')).toBeTruthy();
    expect(content0).toHaveClass('opacity-0');

    fireEvent.click(buttons[1]);
    expect(content1).toHaveClass('opacity-0');
  });
});
