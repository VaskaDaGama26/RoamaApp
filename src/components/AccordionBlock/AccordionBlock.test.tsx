import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AccordionBlock from './AccordionBlock';

const mockData = [
  { title: 'Title 1', text: 'Content 1' },
  { title: 'Title 2', text: 'Content 2' },
  { title: 'Title 3', text: 'Content 3' },
];

describe('AccordionBlock', () => {
  it('renders all accordion items', () => {
    render(<AccordionBlock data={mockData} />);
    
    mockData.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('opens and closes accordion items on click', () => {
    render(<AccordionBlock data={mockData} />);
    
    const firstButton = screen.getByText('Title 1');
    const secondButton = screen.getByText('Title 2');

    // По умолчанию первый открыт (defaultOpenIndex = 0)
    expect(screen.getByTestId('accordion-content-0')).toHaveClass('max-h-[500px]');
    expect(firstButton).toHaveTextContent('−');

    // Клик по первому — закрывает
    fireEvent.click(firstButton);
    expect(screen.getByTestId('accordion-content-0')).toHaveClass('max-h-0');
    expect(firstButton).toHaveTextContent('+');

    // Клик по второму — открывает его
    fireEvent.click(secondButton);
    expect(screen.getByTestId('accordion-content-1')).toHaveClass('max-h-[500px]');
    expect(secondButton).toHaveTextContent('−');

    // Первый теперь закрыт
    expect(screen.getByTestId('accordion-content-0')).toHaveClass('max-h-0');
  });

  it('renders with defaultOpenIndex = null', () => {
    render(<AccordionBlock data={mockData} defaultOpenIndex={null} />);

    mockData.forEach((_, index) => {
      expect(screen.getByTestId(`accordion-content-${index}`)).toHaveClass('max-h-0');
    });
  });
});
