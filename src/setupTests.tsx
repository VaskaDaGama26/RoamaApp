import '@testing-library/jest-dom';
import { vi } from 'vitest';

class IntersectionObserverMock {
  constructor(
    public callback: any,
    public options?: any
  ) {}
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

globalThis.IntersectionObserver = IntersectionObserverMock as any;