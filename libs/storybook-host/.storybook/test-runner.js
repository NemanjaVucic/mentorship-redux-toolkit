const { checkA11y, injectAxe } = require('axe-playwright');

const STORY_WRAPPER_SELECTOR = '#storybook-root';

module.exports = {
  async preRender(page) {
    await injectAxe(page);
  },

  async postRender(page) {
    await checkA11y(page, STORY_WRAPPER_SELECTOR, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};
