import { checkA11y, injectAxe } from 'axe-playwright';
import { Page } from 'playwright';

const STORY_WRAPPER_SELECTOR = '#root';

export const preRender = async (page: Page) => {
  injectAxe(page);
};

export const postRender = async (page: Page) => {
  checkA11y(page, STORY_WRAPPER_SELECTOR, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
};
