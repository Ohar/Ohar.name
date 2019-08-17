const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, '/src'),
      root: path.join(__dirname, '/')
    }
  }
};
