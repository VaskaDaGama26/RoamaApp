import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeedbackInputWrapper from './FeedbackInputWrapper';

describe('FeedbackInputWrapper', () => {
  it('renders label, children and error correctly', () => {
    render(
      <FeedbackInputWrapper label="Ваш email" error="Поле обязательно">
        <input type="email" placeholder="example@email.com" data-testid="test-input" />
      </FeedbackInputWrapper>
    );

    expect(screen.getByText('Ваш email')).toBeInTheDocument();
    expect(screen.getByTestId('test-input')).toBeInTheDocument();
    expect(screen.getByText('Поле обязательно')).toBeInTheDocument();
  });

  it('does not render error if not provided', () => {
    render(
      <FeedbackInputWrapper label="Имя">
        <input type="text" placeholder="Ваше имя" data-testid="name-input" />
      </FeedbackInputWrapper>
    );

    expect(screen.getByText('Имя')).toBeInTheDocument();
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.queryByText(/обязательно/i)).not.toBeInTheDocument();
  });
});
