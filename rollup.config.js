const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const scss = require('rollup-plugin-scss');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'esm'
    }
  ],
  plugins: [
    scss(),
    postcss({
      modules: true,
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    commonjs(),
    resolve(),
  ],
  external: [
    'react',
    'react-dom',
    'prop-types',
  ]
}