/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../___STORIES___/**/*.mdx", "../___STORIES___/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;