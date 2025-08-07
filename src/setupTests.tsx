import '@testing-library/jest-dom';
import { vi } from 'vitest';

class IntersectionObserverMock {
  constructor(
    public callback: any,
    public options?: any
  ) {}
  observe = vi.fn((element: Element) => {
    this.callback([{ isIntersecting: true, target: element }], this);
  });
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn();
}
globalThis.IntersectionObserver = IntersectionObserverMock as any;

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverMock;