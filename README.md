# Example Web Component test suite

**LOOKING FOR CONTRIBUTIONS**

I would really value your input if you can help me improve this test suite. Please see below for a brief explanation of what I'm after. 


This is a work-in-progress test suite example for [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components).

It arose because I wanted to have the same expectations with testing as I do with any other frontend stack as I do when building Web Components.

I also found that the existing tutorials and libraries for this purpose use frameworks like Lit. Whilst I see the value in those frameworks, personally I just ditched my abstractions and I don't want to adopt another. I want to build with native web tools.

I've used [media-chrome](https://www.media-chrome.org/) as a basis for this test suite because it's a non-trivial Web Component. It's also a really well thought out project which I enjoy using.

This repo contains my tools of choice for the following:

1. Static analysis: [JSDoc](https://jsdoc.app/)
2. Unit testing: [Vitest](https://vitest.dev/)
3. E2E testing: [Cypress](https://www.cypress.io/)
4. Manual testing: [Storybook](https://storybook.js.org/)
5. Bundling: [Vite](https://vitejs.dev/)

I have leveraged additional tools from [FicusJS](https://www.ficusjs.org/), which is another abstraction to web components, but I've used it solely in my testing cycle to provide me with extra functionality to [JSDOM](https://www.npmjs.com/package/jsdom) that is suited to rendering web components.

Each of these currently have limitations when it comes to testing web components, and I really hope it doesn't stay that way.


These limitations are listed below:

## JSDoc

### What's possible:

1. Static typing functions and variables 

### What's not possible:

1. Typing arguments in a HTML Element unless they are explicitly declared


## Storybook

Storybook has the most support for web components.

[View playground](https://example-web-components-test-suite.netlify.app/storybook)

### What's possible:

1. Render a component
2. Alter Rendered component based on arguments
3. Fire events to the component
4. Observe events bubbled from the component

### What's not possible:

1. Checking whether an item in the internal ui has rendered as a result of arguments passed
2. Observing events inside the component

## Vitest

### What's possible:

1. Render a component

### What's not possible:

1. Alter Rendered component based on arguments
2. Fire events to the component
3. Observe events bubbled from the component
1. Checking whether an item in the internal ui has rendered as a result of arguments passed
2. Observing events inside the component

## Cypress

### What's possible:

1. Render a component
2. Alter Rendered component based on arguments
3. Fire events to the component
4. Observe events bubbled from the component

### What's not possible:

1. Checking whether an item in the internal ui has rendered as a result of arguments passed
2. Observing events inside the component


## Cypress

### What's possible:

1. Render a component
2. Alter Rendered component based on arguments
3. Fire events to the component
4. Observe events bubbled from the component

### What's not possible:

1. Checking whether an item in the internal ui has rendered as a result of arguments passed
2. Observing events inside the component

## Vitest

Works fine with web components.

# Spotted a mistake?

I'm pretty new to this web components thing, and would love it if someone could educate me where I've gone wrong with each of these.

I don't mind anything I don't yet know about that improves the test coverage for any of these tools. This would include alternative DOM libraries and other tools, However my one requirement is that it does not extensively use abstractions from web components to do so. 

For example, I know I can likely get better test coverage if I use Lit Element instead of the barebones HTML Element. But my requirement is that I want to use an HTML Element.

If you're going to suggest a change to this readme, please also provide code examples in the pull request by adding to the existing test suites.