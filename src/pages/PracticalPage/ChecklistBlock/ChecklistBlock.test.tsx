import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import ChecklistBlock from './ChecklistBlock';

const fakeData = {
  'Тест 1': [{ label: 'Подпись 1.1' }, { label: 'Подпись 1.2' }, { label: 'Подпись 1.3' }],
  'Тест 2': [{ label: 'Подпись 2.1' }, { label: 'Подпись 2.2' }],
};

describe('ChecklistBlock', () => {
  it('renders checklist items', () => {
    render(<ChecklistBlock data={fakeData} />);

    // Заголовки категорий
    expect(screen.getByText('Тест 1')).toBeInTheDocument();
    expect(screen.getByText('Тест 2')).toBeInTheDocument();

    // Содержимое категорий
    expect(screen.getByText('Подпись 1.1')).toBeInTheDocument();
    expect(screen.getByText('Подпись 2.2')).toBeInTheDocument();
  });
});
