import '../src/app';

/**
 *  @typedef {import ('../types').UserOptions} UserOptions
 */

export default {
  title: 'Media Embeds',
  argTypes: {
    videourl: { 
      control: 'text',
    },
    posterurl: {
      control: 'text',
    },
  }
};

const Template = ({
  videourl,
  posterurl
}) => `
  <media-player 
    videourl="${videourl}"
    posterurl="${posterurl}"
  ></media-player>
`;

export const Player = Template.bind({});

/**
 * @type {UserOptions}
 */
Player.args = {
  videourl: 'https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/high.mp4',
  posterurl: 'https://image.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/thumbnail.jpg',
}