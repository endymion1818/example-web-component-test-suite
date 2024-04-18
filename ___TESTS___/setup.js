import { vi } from 'vitest';

/*
 * make sure you run a build before running the tests
*/

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

global.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // deprecated
  removeListener: vi.fn(), // deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

global.CSSStyleSheet = vi.fn().mockImplementation(() => ({
  insertRule: vi.fn(),
  deleteRule: vi.fn(),
}));

global.HTMLElement = vi.fn().mockImplementation(() => ({
  getBoundingClientRect: vi.fn().mockReturnValue({
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }),
  clientWidth: 100,
  clientHeight: 100,
  style: {
    setProperty: vi.fn(),
  },
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

global.customElements = {
  define: vi.fn(),
  get: vi.fn(),
  getName: vi.fn(),
  upgrade: vi.fn(),
  whenDefined: vi.fn(),
};