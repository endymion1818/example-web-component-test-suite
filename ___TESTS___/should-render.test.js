import { describe, it, beforeEach, expect } from 'vitest';
import { init } from '@ficusjs/testing'

import '../src/app.js';

describe("<media-player> ", () => {
  beforeEach(() => {
    init();
  });
  it("should render", async () => {
    document.body.innerHTML = '<media-player></media-player>';
    expect(document.querySelector('media-player')).to.exist;
  });
});