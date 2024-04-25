import { describe, it, beforeEach, expect } from 'vitest';
import { init } from '@ficusjs/testing'

import '../src/app.js';

describe("<media-player> ", () => {
  beforeEach(() => {
    init();
  });
  // ✅ works as expected
  it("should render", async () => {
    document.body.innerHTML = '<media-player></media-player>';
    expect(document.querySelector('media-player')).to.exist;
  });
  // ❌ doesn't re-render the component so test fails
  it("should play the video", async () => {
    document.body.innerHTML = '<media-player></media-player>';
    const controlBar = document.querySelector('media-player')?.shadowRoot().querySelector('media-control-bar')
    controlBar?.shadowRoot().querySelector('media-play-button')?.click();
    expect(controlBar).to.have.attribute('mediahasplayed', 'true');
  });
  it('should render a different video', () => {
    document.body.innerHTML = '<media-player videourl="https://www.w3schools.com/tags/movie.mp4"></media-player>';
    const mediaPlayer = document.querySelector('media-player');
    const video = mediaPlayer?.shadowRoot().querySelector('video');
    expect(video).to.have.attribute('src', 'https://www.w3schools.com/tags/movie.mp4');
  })
});