const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  
  on('task', {
    cleanScreenshotsFolder() {
      const screenshotsFolder = path.join(__dirname, '..', '..', 'screenshots');
      fs.removeSync(screenshotsFolder);
      return null;
    },
  });
};
