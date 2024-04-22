import 'media-chrome';

/**
 * @typedef {import('../types').UserOptions} UserOptions
 */

class MediaPlayer extends HTMLElement {
  constructor() {
    super()
    this.videourl = this.getAttribute('videourl');
    this.posterurl = this.getAttribute('posterurl');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const mediaController = this.shadowRoot?.querySelector("media-controller");
        if (entry.isIntersecting) {
          // @ts-ignore shadowRoot is not never
          const rect = mediaController?.getBoundingClientRect();

          mediaController?.classList.remove('is-floating');
          // @ts-ignore style exists on this element
          this.style = `height: ${rect?.height}px; width: ${rect?.width}px;`;
        } else {
          mediaController?.classList.add('is-floating');
        }
      });
    });
  }

  /**
   * 
   * General methods
   */
  bindEvents() {

    /**
     * @type {HTMLMediaElement | undefined | null}
     */
    const videoElement = this.shadowRoot?.querySelector('video');
    
    const userEvents = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting']

    userEvents.forEach((userEvent) => {
      videoElement?.addEventListener(userEvent, () => {
        this.dispatchEvent(new CustomEvent(userEvent, { bubbles: true, composed: true }));
        this.setAttribute('mediatime', videoElement?.currentTime.toString());
      });
    });
    
    const incomingEvents = [
      'play',
      'pause',
      'mute',
      'seek',
    ]
    incomingEvents.forEach((incomingEvent) => {
      this?.addEventListener(incomingEvent, (event) => {
        if (videoElement && event.type === 'seek') {
          // no casting available in JSDoc :-(
          // @ts-ignore
          videoElement.currentTime = event.detail.timestamp;
        }
        if (videoElement && event.type === 'play') {
          this.setAttribute('mediaplaying', 'true');
          videoElement.play();
        }
        if (videoElement && event.type === 'pause') {
          this.setAttribute('mediapaused', 'true');
          videoElement.pause();
        }
        if(videoElement && event.type === 'mute') {
          videoElement.muted = !videoElement.muted;
        }
      });
    });
  }

  /**
   * 
   * Lifecycle methods
   */
  async connectedCallback() {

    this.observer.observe(this);
    if (!this.videourl) {
      console.error('A media token is required');
      return;
    }
    // @see https://caniuse.com/mdn-api_cssstylesheet_replacesync
    if (this.shadowRoot || !("replaceSync" in CSSStyleSheet.prototype)) {
      return;
    }

    const mediaItem = await fetch(`${this.videourl}`)

    if (!mediaItem) {
      console.error('there doesnt appear to be a video at that location');
      return;
    }

    const css = `
      :host {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 9;
      }
    `;

    const html = `
    <media-controller>
      <video
        slot="media"
        src="${this.videourl}"
        poster="${this.posterurl}"
      ></video>
      <media-control-bar>
        <media-play-button></media-play-button>
        <media-mute-button></media-mute-button>
        <media-time-range></media-time-range>
        <media-time-display></media-time-display>
        <media-fullscreen-button></media-fullscreen-button>
      </media-control-bar>
    </media-controller>
    `;

    const shadowroot = this.attachShadow({ mode: "open" });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    shadowroot.adoptedStyleSheets = [sheet];

    if (!this.shadowRoot) {
      return;
    }
    shadowroot.innerHTML = html;


    this.bindEvents();
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }
}

customElements.define('media-player', MediaPlayer)

export default MediaPlayer