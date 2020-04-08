const config = require("@reactioncommerce/admin-core/config/jest.config");

module.exports = {
  ...config,
  setupFiles: [
    "@reactioncommerce/admin-core/config/test-polyfills.js"
  ],
  setupFilesAfterEnv: [
    "@reactioncommerce/admin-core/package/src/test-utils/setupTests.js"
  ]
};
