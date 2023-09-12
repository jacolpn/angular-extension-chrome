import type { Configuration } from 'webpack';

module.exports = {
  entry: { background: { import: 'src/background.js', runtime: false } },
} as Configuration;
