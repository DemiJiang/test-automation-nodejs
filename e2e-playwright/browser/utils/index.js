const {
  PATH_SCREENSHOTS,
  PATH_VIDEOS,
} = require('../config');

exports.getBrowserAndLaunch = async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: false });
  return browser;
};

exports.getContextConfig = ({ record = false }) => {
  const context = {};
  const contextWithRecording = {
    recordVideo: {
      dir: PATH_VIDEOS,
      size: { width: 800, height: 600 },
    },
  };

  if (record) {
    return {
      ...context,
      ...contextWithRecording,
    };
  }

  return context;
};

exports.getScreenshot = async ({ page, title }) => {
  await page.screenshot({
    path: `${PATH_SCREENSHOTS}/${title}.png`,
  });
};
